import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import removeIcon from "../Images/remove.svg"

class FavoriteSkriptaCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.removeSkripta = this.removeSkripta.bind(this);
}

removeSkripta(e){
    e.preventDefault();
    {/* TODO : remove home favorite skripta card */}
}


    render() {
        return (
            <div className="favorite-kolegiji-card">
                <Link to={`/skripta/`+this.props.keyprop}>
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">{this.props.title}</h1>
                        {/* <p className="favorite-kolegij-card-type">Usmeni</p> */}
                        <p className="favorite-kolegij-card-date">{this.props.date}</p>
                        <p className="favorite-kolegij-card-description">{this.props.description}</p>
                    </div>
                </Link>
                <img alt="asd" onClick={this.removeSkripta} src={removeIcon} className="remove-favorite-skripta-card"/>
            </div>
        );
    }
}

export default FavoriteSkriptaCard;
