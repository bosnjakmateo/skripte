import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";


class Account extends Component {
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
            <div>
                <Navbar/>
                <div className='account-page'>
                    <h3>Moje Skripte</h3>
                </div>
            </div>
        );
    }
}

export default Account;
