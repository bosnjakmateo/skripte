import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaInfo from "./SkriptaInfo";
import SkriptaComments from "./SkriptaComments";
import SkriptaPdf from "./SkriptaPdf";
import {getScriptById} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Skripta extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null
        };
    }

    componentDidMount(){
        let id = this.props.match.params.skripta_id;
        this.setState({
            id: id
        })
        this.props.getScriptById(id);
    }




    render() {
        return (
            <div className="skripta-page">
                <Navbar/>
                <div className="skripta-second-navbar">
                    <h1 className="skripta-second-navbar-title">{this.props.profile.currentScript.title}</h1>
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

export default withRouter(connect(mapStateToProps, {getScriptById})(Skripta))

