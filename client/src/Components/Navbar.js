import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    <Link to="/home">
                        <h1 className="logo">SKRIPTE</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <Link to="/svikolegiji">
                        <button className="navbar-link">SVI KOLEGIJI</button>
                    </Link>
                    <Link to="/home">
                        <button className="navbar-link">MOJI KOLEGIJI</button>
                    </Link>
                    <Link to="/login">
                        <img className="navbar-logout-icon" alt="logout-icon" src={logout_icon}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
