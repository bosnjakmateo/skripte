import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import SkriptaCard from "./SkriptaCard";
import {getAllScripts} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import Headroom from 'react-headroom';
import ConfirmModal from "./ConfirmModal";

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            userScripts:[],
            confirmModal:false,
            scriptTitle:"",
            scriptId:""
        };
        this.toggleConfirmModal = this.toggleConfirmModal.bind(this);
    }

    componentDidMount() {
        this.props.getAllScripts();
        this.setState({
            mounted: true
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.auth.userData !== prevProps.auth.userData){
            this.setState({
                userScripts:this.props.auth.userData.scripts
            })
        }
    }

    toggleConfirmModal(title,id){
        this.setState({
            confirmModal : !this.state.confirmModal,
            scriptTitle: title,
            scriptId: id
        })
    }


    render() {
        let userScripts = this.props.profile.allScripts.filter(a => a.user === this.props.auth.userData.username);
        return (
            <div>
                <Headroom disableInlineStyles={true}>
                    <Navbar/>
                    <div className={classnames('second-navbar',{
                        'second-navbar-dark' : this.props.auth.theme === "Dark"
                    })}>
                        <h1 className={classnames('second-navbar-title',{
                            'second-navbar-dark-title' : this.props.auth.theme === "Dark"
                        })}>Moje Skripte</h1>
                    </div>
                </Headroom>
                <div className='account-page'>
                    <div className="skripte-container">
                        {!this.props.profile.allScripts ? <Spinner/>
                            : userScripts.map((item) =>
                                <SkriptaCard toggleConfirmModal={this.toggleConfirmModal} keyprop={item._id} key={item._id} title={item.title} date={item.date} username={item.user} description={item.description} />
                            )}
                    </div>
                </div>
                {this.state.confirmModal ? <ConfirmModal scriptId={this.state.scriptId} scriptTitle={this.state.scriptTitle} toggleConfirmModal={this.toggleConfirmModal}/> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {getAllScripts})(Account))

