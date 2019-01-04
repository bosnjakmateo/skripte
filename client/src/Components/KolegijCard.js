import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import removeIcon from "../Images/remove.svg"

class KolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Link to="/kolegij">
                <div className="kolegij-card">
                    <h1 className="kolegij-card-title">{this.props.title}</h1>
                    <img src={removeIcon} className="remove-kolegij-card"/>
                </div>
            </Link>
        );
    }
}

export default KolegijCard;
