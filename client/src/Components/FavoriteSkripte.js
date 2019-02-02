import React, { Component } from 'react';
import '../App.css';
import FavoriteSkriptaCard from "./FavoriteSkriptaCard";

class FavoriteSkripte extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="favorite-kolegiji">
                <div className="favorite-kolegiji-name-container">
                    <h1 className="favorite-kolegiji-name">Omiljene Skripte</h1>
                </div>
                <FavoriteSkriptaCard/>
                <FavoriteSkriptaCard/>
                <FavoriteSkriptaCard/>
            </div>
        );
    }
}

export default FavoriteSkripte;
