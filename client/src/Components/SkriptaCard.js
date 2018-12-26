import React, { Component } from 'react';
import '../App.css';

class SkriptaCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="skripta-card">
                <div className="skripta-card-content">
                    <h1 className="skripta-card-title">Naziv</h1>
                    <p className="skripta-card-date">21.12.2012</p>
                    <p className="skripta-card-username">ivanbalen666</p>
                    <p className="skripta-card-description">pitanja i odgovori, moguće su griješke pitanja i odgovori, moguće su griješke</p>
                </div>
            </div>
        );
    }
}

export default SkriptaCard;
