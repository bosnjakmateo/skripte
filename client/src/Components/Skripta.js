import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaInfo from "./SkriptaInfo";
import SkriptaComments from "./SkriptaComments";
import SkriptaPdf from "./SkriptaPdf";
import {getScriptById, addScriptToFavorites, removeScriptFromFavorites} from "../Actions/profileActions";
import {getCurrentUser} from "../Actions/authActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";


class Skripta extends Component {
    constructor(props){
        super(props);
        this.state = {
            scriptAlreadyInFavorites:false,
            loading:true
        };
        this.addToFavorites = this.addToFavorites.bind(this);
        this.checkIfAlreadyInFavorites = this.checkIfAlreadyInFavorites.bind(this)
        this.removeSkripta = this.removeSkripta.bind(this);
    }

    componentDidMount(){
        this.props.getScriptById(this.props.match.params.skripta_id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.currentScript !== prevProps.profile.currentScript  ) {
            this.setState({
                loading:true
            })
            this.checkIfAlreadyInFavorites();
        }
        if(this.props.profile.errors !== prevProps.profile.errors){
            window.location.href = '/home';
        }
    }

    removeSkripta(e){
        e.preventDefault();
        this.props.removeScriptFromFavorites(this.props.match.params.skripta_id)
        this.setState({
            scriptAlreadyInFavorites: false
        })
    }

    addToFavorites(){
        this.props.addScriptToFavorites(this.props.match.params.skripta_id);
        this.setState({
            scriptAlreadyInFavorites: true
        })
    }

    checkIfAlreadyInFavorites(){
        let ress = this.props.auth.userData.favoriteScripts.filter(a => a._id.includes(this.props.match.params.skripta_id));
        if(ress.length > 0){
            this.setState({
                scriptAlreadyInFavorites: true
            })
        }else{
            this.setState({
                scriptAlreadyInFavorites: false
            })
        }
        this.setState({
            loading:false
        })
    }

    render() {
        return (
            <div className="skripta-page">
                <Navbar/>
                <div className={classnames('skripta-second-navbar',{
                    'skripta-second-navbar-dark' : this.props.auth.theme === "Dark"
                })}>
                    <div className="test3">
                        <h1 className={classnames('skripta-second-navbar-title',{
                            'skripta-second-navbar-title-dark' : this.props.auth.theme === "Dark"
                        })}>
                            {this.state.loading ? <div className="aaa"/> : this.props.profile.currentScript.title}</h1>
                        {this.state.loading || this.state.scriptAlreadyInFavorites?
                            <button className="remove-from-favorites-button" disabled={this.state.loading} onClick={this.removeSkripta}>Izbrisi iz Omiljenih</button>
                            :
                            <button className="add-to-favorites-button" disabled={this.state.scriptAlreadyInFavorites} onClick={this.addToFavorites}>Dodaj u Omiljene</button>}
                    </div>
                </div>
                <div className="skripta-page-content">
                    <SkriptaPdf/>
                        <SkriptaInfo/>
                        <SkriptaComments/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {removeScriptFromFavorites,getScriptById,addScriptToFavorites,getCurrentUser})(Skripta))

