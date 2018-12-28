import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class FavoriteKolegijiCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="favorite-kolegiji-card">
                <Link to="/skripta">
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">Strukture podataka i algoritmi</h1>
                        <p className="favorite-kolegij-card-type">Usmeni</p>
                        <p className="favorite-kolegij-card-date">12.12.2012</p>
                        <p className="favorite-kolegij-card-description">pitanja i odgovori na pitanja, moguće su griješke,pitanja i odgovori na pitanja, moguće su griješke</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default FavoriteKolegijiCard;
