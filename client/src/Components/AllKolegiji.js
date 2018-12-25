import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import InstitutionType from "./InstitutionType";

class AllKolegiji extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="all-kolegiji">
                <Navbar/>
                <div className="institution-container">
                    <InstitutionType/>
                    <InstitutionType/>
                </div>
            </div>
        );
    }
}

export default AllKolegiji;
