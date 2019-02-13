import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import Moment from "react-moment";

import {connect} from "react-redux";

class SkriptaCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        let timestamp = Date.parse(this.props.date);
        return (
            <div className="skripta-card">
                <Link to={`/skripta/`+this.props.keyprop}>
                    <div className="skripta-card-content">
                        <h1 className="skripta-card-title">{this.props.title}</h1>
                        <p className="skripta-card-date"><Moment format="DD.MM.YYYY">{timestamp}</Moment></p>
                        <p className="skripta-card-username">{this.props.username}</p>
                        <p className="skripta-card-description">{this.props.description}</p>
                    </div>
                </Link>
                <div className="side-card"/>
                <div className="side-card2"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});


export default withRouter(connect(mapStateToProps, {})(SkriptaCard))