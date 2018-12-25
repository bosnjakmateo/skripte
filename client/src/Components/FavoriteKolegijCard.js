import React, { Component } from 'react';
import '../App.css';

class FavoriteKolegijiCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="favorite-kolegiji-card">
                <div className="favorite-kolegij-card-content">
                    <h1 className="favorite-kolegij-card-title">Strukture podataka i algoritmi</h1>
                    <p className="favorite-kolegij-card-type">Usmeni</p>
                    <p className="favorite-kolegij-card-date">12.12.2012</p>
                    <p className="favorite-kolegij-card-description">pitanja i odgovori na pitanja, moguće su griješke,pitanja i odgovori na pitanja, moguće su griješke</p>
                </div>
            </div>
        );
    }
}

export default FavoriteKolegijiCard;
