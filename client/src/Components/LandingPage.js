import React, { Component } from 'react';
import '../App.css';
import Phone from "../Images/phone.png"
import Phone4 from "../Images/phone4.png"
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from "react-redux";
import {registerUser} from "../Actions/authActions";

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({
            mounted: true
        });
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/home")
        }
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-page-first-section">
                    <div className="landing-page-navbar">
                        <h1 className="landing-page-navbar-title">SKRIPTE</h1>
                            <div className={classnames('landing-page-navbar-buttons-container',{
                            'button-fade-in' : this.state.mounted
                            })}>
                            <Link to="/login">
                                <div className="landing-page-navbar-login-button">
                                    <div className="landing-page-button login">
                                        <p>PRIJAVA</p>
                                        <div className="mask"/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/register">
                                <div className="landing-page-navbar-register-button">
                                    <div className="landing-page-button register">
                                        <p>REGISTRACIJA</p>
                                        <div className="mask2"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="landing-page-top-container">
                        <div className={classnames('landing-page-top-left-content',{
                            'move-up-animation' : this.state.mounted
                        })}>
                            <h1 className={classnames('landing-page-intro-text',{
                                'animate-intro-text' : this.state.mounted
                            })}>Put your creative thinking to work, with Skripte</h1>
                            <p className={classnames('landing-page-intro-paragraph',{
                                'animate-intro-paragraph' : this.state.mounted
                            })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consectetur</p>
                            <Link to="/home">HOME</Link>
                        </div>
                        <div className={classnames('landing-page-top-right-content',{
                            'animate-phone-img' : this.state.mounted
                        })}>
                            <img alt="phone" className="landing-page-top-right-content-image" src={Phone4} />
                        </div>
                    </div>
                </div>
                <div className="landing-page-second-section">
                    <div className="landing-page-second-section-content">
                        <div className="first-container">
                            <p className="first-container-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consecteturipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt
                            </p>
                            <img alt="phone" src={Phone} className="first-container-img"/>
                        </div>
                        <div className="first-container">
                            <p className="first-container-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consectetur ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consectetur
                            </p>
                            <img alt="phone" src={Phone} className="first-container-img"/>
                        </div>
                        <div className="first-container">
                            <p className="first-container-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est.
                                Mauris consectetur ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper,
                            </p>
                            <img alt="phone" src={Phone} className="first-container-img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(LandingPage);
