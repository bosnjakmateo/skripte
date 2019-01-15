import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import removeIcon from "../Images/remove.svg"

class KolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.removeKolegij = this.removeKolegij.bind(this);
    }

    removeKolegij(e){
        e.preventDefault();
        {/* TODO : remove home kolegij card */}
    }


    render() {
        return (
            <Link to="/kolegij">
                <div className="kolegij-card">
                    <h1 className="kolegij-card-title">{this.props.title}</h1>
                    <img onClick={this.removeKolegij} src={removeIcon} className="remove-kolegij-card"/>
                </div>
            </Link>
        );
    }
}

export default KolegijCard;
