import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import KolegijContent from "./KolegijContent";

class KolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Link to="/kolegij">
                <div className="kolegij-card">
                    <h1 className="kolegij-card-title">Ime Kolegija Hard Coded</h1>
                </div>
            </Link>
        );
    }
}

export default KolegijCard;
