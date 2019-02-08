import React, { Component } from 'react';
import '../App.css';

class Darken extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div onClick={this.props.toggleDark} className="darken">

            </div>
        );
    }
}

export default Darken;
