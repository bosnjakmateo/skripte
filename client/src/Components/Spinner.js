import React, { Component } from 'react';
import '../App.css';
import spinner from "../Images/spinner.gif"


class Spinner extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="spinner-container">
                <img className="spinner" alt={"loading..."} src={spinner} />
            </div>
        );
    }
}


export default Spinner;