import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';

import {connect} from "react-redux";

class SkriptaCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="skripta-card">
                <Link to={`/skripta/`+this.props.keyprop}><div className="skripta-card-content">
                    <h1 className="skripta-card-title">{this.props.title}</h1>
                    <p className="skripta-card-date">{this.props.date}</p>
                    <p className="skripta-card-username">{this.props.username}</p>
                    <p className="skripta-card-description">{this.props.description}</p>
                </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});


export default withRouter(connect(mapStateToProps, {})(SkriptaCard))