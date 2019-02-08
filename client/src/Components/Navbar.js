import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { CSSTransitionGroup } from 'react-transition-group'
import { HamburgerSpin } from 'react-animated-burgers'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import userMenuArrow from "../Images/userMenuArrow.svg"
import { logoutUser } from "../Actions/authActions";
import { getCurrentUser } from "../Actions/authActions";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";
import Darken from "./Darken";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isActive: false,
            currentRoute: this.props.location.pathname,
            userMenu:false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.toggleDark = this.toggleDark.bind(this);
    }

    componentDidMount(){
        this.props.getCurrentUser();
    }


    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
        if(!this.state.isOpen) {
            document.body.classList.add('non-scrollable');
        }else{
            document.body.classList.remove('non-scrollable');
        }
    }

    toggleUserMenu() {
        this.setState({ userMenu: !this.state.userMenu });
    }
    toggleDark(){

    }

    toggleButton() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/login")
    }


    render() {
        return (
            <div>
                {this.state.userMenu ? <Darken toggleDark={this.toggleUserMenu}/> : null}
            <div className="navbar">
                <CSSTransitionGroup
                    transitionName="sidebar"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={500}>
                    {this.state.isOpen && <Sidebar clicker={this.toggleMenu}/>}
                </CSSTransitionGroup>
                <div className="navbar-logo">
                    <Link to="/home">
                        <h1 className="logo">SKRIPTE</h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <Link className="svikolegiji-button" to="/institucije">
                        <button className={"navbar-link" + (this.state.currentRoute === "/institucije" ? " color-blue" : "")}>PRONAĐI KOLEGIJ</button>
                        <div className={"mask-home" + (this.state.currentRoute === "/institucije" ? " mask-stay" : "")}/>
                    </Link>

                    <Link className="home-button" to="/home">
                        <button  className={"navbar-link" + (this.state.currentRoute === "/home" ? " color-blue" : "")}>MOJI KOLEGIJI</button>
                        <div className={"mask-home" + (this.state.currentRoute === "/home" ? " mask-stay" : "")}/>
                    </Link>
                    <div className="user-menu" onClick={this.toggleUserMenu}>
                        <p className="user-name">{this.props.auth.userData.username}</p>
                        <img src={userMenuArrow} className={classnames("user-menu-arrow",{
                        "rotate-arrow" : this.state.userMenu})}
                            alt="drop-down-arrow"/>
                        <div className={classnames("user-menu-collapsible",{
                            "menu-collapsed" : this.state.userMenu
                        })}>
                            <div className="collapsed-menu-content" onClick={this.handleLogoutClick} >
                                <p className="logout-button">Logout</p>
                                <img className="navbar-logout-icon" alt="logout-icon"
                                     src={logout_icon}/>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-container">
                        <HamburgerSpin padding={0} buttonWidth={33} isActive={this.state.isOpen} toggleButton={this.toggleMenu}  barColor="white" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logoutUser,getCurrentUser })(Navbar))

