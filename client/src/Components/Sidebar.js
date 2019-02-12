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
    }

    handleLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-right">
                    <Link to="/home" className="sidebar-right-links">Moji Kolegiji</Link>
                    <Link to="/institucije" className="sidebar-right-links">Pronađi Kolegij</Link>
                    <Link to="/account" className="sidebar-right-links">Account</Link>
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


