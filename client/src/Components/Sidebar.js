import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {logoutUser} from "../Actions/authActions";

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    handleLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/login")
    }

    handleThemeChange(){
        this.props.toggleMenu();
        this.props.changeTheme()
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-right">
                    <Link to="/home" className="sidebar-right-links">Moji Kolegiji</Link>
                    <Link to="/institucije" className="sidebar-right-links">Pronađi Kolegij</Link>
                    <Link to="/account" className="sidebar-right-links">Account</Link>
                    <p className="sidebar-right-links" onClick={this.handleThemeChange}>{this.props.auth.theme === "Light" ? "Dark Mode" : "Light Mode" }</p>
                    <p onClick={this.handleLogoutClick} className="sidebar-right-links">Odjavi se</p>
                </div>
                <div onClick={this.props.clicker.bind(this)} className="sidebar-left">
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logoutUser })(Sidebar))


