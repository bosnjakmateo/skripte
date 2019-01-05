import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import InstitutionType from "./InstitutionType";

class AllKolegiji extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }


    render() {
        return (
            <div className='all-kolegiji'>
                <Navbar/>
                <InstitutionType/>
            </div>
        );
    }
}

export default AllKolegiji;
