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
            this.checkIfAlreadyInFavorites();
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
                    <div className="test2">
                        <h1 className="skripta-second-navbar-title">{this.props.profile.currentScript.title}</h1>
                        <button disabled={this.state.scriptAlreadyInFavorites} onClick={this.addToFavorites}>Dodaj u Favorite</button>
                    </div>
                    <p className="skripta-second-navbar-description">{this.props.profile.currentScript.description}</p>
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

