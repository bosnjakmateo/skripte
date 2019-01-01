import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { CSSTransitionGroup } from 'react-transition-group'
import { HamburgerSpin } from 'react-animated-burgers'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isActive: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
        if(!this.state.isOpen) {
            document.body.classList.add('non-scrollable');
        }else{
            document.body.classList.remove('non-scrollable');
        }
    }

    toggleButton() {
        this.setState({
            isActive: !this.state.isActive
        })
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
                    <Link to="/home">
                        <button className="navbar-link">MOJI KOLEGIJI</button>
                    </Link>
                    <Link to="/login">
                        <img className="navbar-logout-icon" alt="logout-icon" src={logout_icon}/>
                    </Link>
                    <div className="hamburger-container">
                        <HamburgerSpin buttonWidth={33} isActive={this.state.isOpen} toggleButton={this.toggleMenu}  barColor="white" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
