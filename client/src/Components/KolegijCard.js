import React, { Component } from 'react';
import '../App.css';

class KolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="kolegij-card">
                <h1 className="kolegij-card-title">Ime Kolegija Hard Coded</h1>
            </div>
        );
    }
}

export default KolegijCard;
