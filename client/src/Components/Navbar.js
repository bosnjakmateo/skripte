import React, { Component } from 'react';
import '../App.css';
import logout_icon from "../Images/logout.svg";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { CSSTransitionGroup } from 'react-transition-group'
import { HamburgerSpin } from 'react-animated-burgers'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../Actions/authActions";
import { getCurrentUser } from "../Actions/authActions";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isActive: false,
            currentRoute: this.props.location.pathname,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
                    <p className="navbar-username">hello {this.props.auth.userData.username}</p>
                </div>
                <div className="navbar-menu">
                    <Link className="svikolegiji-button" to="/svikolegiji">
                        <button className={"navbar-link" + (this.state.currentRoute === "/svikolegiji" ? " color-blue" : "")}>PRONAĐI KOLEGIJ</button>
                        <div className={"mask-home" + (this.state.currentRoute === "/svikolegiji" ? " mask-stay" : "")}/>
                    </Link>

                    <Link className="home-button" to="/home">
                        <button  className={"navbar-link" + (this.state.currentRoute === "/home" ? " color-blue" : "")}>MOJI KOLEGIJI</button>
                        <div className={"mask-home" + (this.state.currentRoute === "/home" ? " mask-stay" : "")}/>
                    </Link>

                    <Link to="/login">
                        <img onClick={this.handleLogoutClick} className="navbar-logout-icon" alt="logout-icon" src={logout_icon}/>
                    </Link>

                    <div className="hamburger-container">
                        <HamburgerSpin padding={0} buttonWidth={33} isActive={this.state.isOpen} toggleButton={this.toggleMenu}  barColor="white" />
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

