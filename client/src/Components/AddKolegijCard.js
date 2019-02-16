import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import addKolegij from "../Images/addKolegij.svg"

class AddKolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

    }

    render() {

        return (
            <Link to={"/institucije"}>
                <div className="add-kolegij-card">
                    <img className="add-kolegij-card-button" src={addKolegij} alt="add new kolegij" title="dodaj novi kolegij"/>
                </div>
            </Link>
        );
    }
}


export default AddKolegijCard