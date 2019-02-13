import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaInfo from "./SkriptaInfo";
import SkriptaComments from "./SkriptaComments";
import SkriptaPdf from "./SkriptaPdf";
import {getScriptById,addScriptToFavorites} from "../Actions/profileActions";
import {getCurrentUser} from "../Actions/authActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Skripta extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            scriptAlreadyInFavorites:false,
            loading:true
        };
        this.addToFavorites = this.addToFavorites.bind(this);
        this.checkIfAlreadyInFavorites = this.checkIfAlreadyInFavorites.bind(this)
    }

    componentDidMount(){
        let id = this.props.match.params.skripta_id;
        this.setState({
            id: id
        })
        this.props.getScriptById(id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.currentScript !== prevProps.profile.currentScript && this.props.auth.loading === false  ) {
            this.setState({
                loading:true
            })
            this.checkIfAlreadyInFavorites();
        }
        if (this.props.profile.currentScript !== prevProps.profile.currentScript && this.props.auth.loading === false  ) {
            this.setState({
                loading:false
            })
        }
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
    }

    render() {
        return (
            <div className="skripta-page">
                <Navbar/>
                <div className="skripta-second-navbar">
                    <div className="test3">
                        <h1 className="skripta-second-navbar-title">{this.state.loading ? <div className="aaa"/> : this.props.profile.currentScript.title}</h1>
                        {this.state.loading ?
                            <button className="add-to-favorites-button" disabled>Dodaj u Favorite</button>
                            :
                            <button className="add-to-favorites-button" disabled={this.state.scriptAlreadyInFavorites} onClick={this.addToFavorites}>Dodaj u Favorite</button>}
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

export default withRouter(connect(mapStateToProps, {getScriptById,addScriptToFavorites,getCurrentUser})(Skripta))

