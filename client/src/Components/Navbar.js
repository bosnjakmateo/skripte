import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { CSSTransitionGroup } from 'react-transition-group'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }



    render() {

        return (
            <div className="navbar">
                <CSSTransitionGroup
                    transitionName="sidebar"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={500}>
                    {this.state.isOpen && <Sidebar clicker={this.toggleMenu}/>}
                </CSSTransitionGroup>
                <div className="navbar-logo">
                    <Link to="/">
                        <h1 className="logo">SKRIPTE</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <Link to="/svikolegiji">
                        <button className="navbar-link">SVI KOLEGIJI</button>
                    </Link>
                    <Link to="/">
                        <button className="navbar-link">MOJI KOLEGIJI</button>
                    </Link>
                    <Link to="/login">
                        <img className="navbar-logout-icon" alt="logout-icon" src={logout_icon}/>
                    </Link>
                    <div className="hamburger-container">
                        <svg onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" width="45" height="25" viewBox="0 0 52.568 36">
                            <g id="Group_536" data-name="Group 536" transform="translate(-496 -300)">
                                <rect id="Rectangle_109" data-name="Rectangle 109" className="hamburger-line" width="45" height="8" rx="4" transform="translate(496 300)"/>
                                <rect id="Rectangle_110" data-name="Rectangle 110" className="hamburger-line" width="45" height="8" rx="4" transform="translate(496 314)"/>
                                <rect id="Rectangle_111" data-name="Rectangle 111" className="hamburger-line" width="45" height="8" rx="4" transform="translate(496 328)"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
