import React, { Component } from 'react';
import '../App.css';
import Phone from "../Images/phone.png"
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="landing-page">
                <div className="landing-page-first-section">
                    <div className="landing-page-navbar">
                        <h1 className="landing-page-navbar-title">SKRIPTE</h1>
                        <div className="landing-page-navbar-buttons-container">
                            <Link to="/login"><button className="landing-page-navbar-login-button">PRIJAVA</button></Link>
                            <Link to="/register"><button className="landing-page-navbar-register-button">REGISTRACIJA</button></Link>
                        </div>
                    </div>
                    <div className="landing-page-top-container">
                        <div className="landing-page-top-left-content">
                            <h1 className="landing-page-intro-text">Put your creative thinking to work, with Skripte</h1>
                            <p className="landing-page-intro-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consectetur</p>
                        </div>
                        <div className="landing-page-top-right-content">
                            <img className="landing-page-top-right-content-image" src={Phone} />
                        </div>
                    </div>
                </div>
                <div className="landing-page-second-section">

                </div>
            </div>
        );
    }
}

export default LandingPage;
