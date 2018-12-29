import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaInfo from "./SkriptaInfo";
import SkriptaComments from "./SkriptaComments";
import SkriptaPdf from "./SkriptaPdf";


class Skripta extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="skripta-page">
                <Navbar/>
                <div className="skripta-second-navbar">
                    <h1 className="skripta-second-navbar-title">Strukture podataka i algoritmi</h1>
                    <p className="skripta-second-navbar-description">Usmeni 21.12.2012</p>
                </div>
                <div className="skripta-page-content">
                    <SkriptaPdf/>
                        <SkriptaInfo/>
                        <SkriptaComments/>
                </div>
            </div>
        );
    }
}

export default Skripta;
