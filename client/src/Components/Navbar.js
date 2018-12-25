import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    <h1 className="logo">SKRIPTE</h1>
                </div>
                <div className="navbar-menu">
                    <a className="navbar-link">Moji Kolegiji</a>
                    <img className="navbar-logout-icon" alt="logout-icon" src={logout_icon}/>
                </div>
            </div>
        );
    }
}

export default Navbar;
