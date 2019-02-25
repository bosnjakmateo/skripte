import React, { Component } from 'react';
import '../App.css';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="notification">
                <h2 className="notification-text">{this.props.text}</h2>
            </div>
        );
    }
}

export default Notification;
