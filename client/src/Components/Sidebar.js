import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-right">
                    <Link to="/home" className="sidebar-right-links">Moji Kolegiji</Link>
                    <Link to="/svikolegiji" className="sidebar-right-links">Svi Kolegiji</Link>
                    <Link to="/upload" className="sidebar-right-links">Upload</Link>
                    <p className="sidebar-right-links">Odjavi se</p>
                </div>
                <div onClick={this.props.clicker.bind(this)} className="sidebar-left">
                </div>
            </div>
        );
    }
}

export default Sidebar;
