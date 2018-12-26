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
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.isOpen && <Sidebar/>}
                </CSSTransitionGroup>
                <div className="navbar-logo">
                    <Link to="/">
                        <h1 className="logo">SKRIPTE</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <button onClick={this.toggleMenu}>toggle</button>
                    <Link to="/svikolegiji">
                        <button className="navbar-link">SVI KOLEGIJI</button>
                    </Link>
                    <Link to="/">
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
