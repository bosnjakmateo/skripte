import React, { Component } from 'react';
import '../App.css';
import dark from "../Images/darkScreen.png"
import light from "../Images/lightScreen.png"
import share from "../Images/share.png";
import Phone4 from "../Images/landingPhone.png";
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from "react-redux";
import {registerUser} from "../Actions/authActions";

import Reveal from 'react-reveal/Reveal';

import CountUp from 'react-countup';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            scrolled:false,
            darkTheme:true
        };

        this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
        this.toggleLightTheme = this.toggleLightTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            mounted: true
        });
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/home")
        }
        this.listener = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.listener);
    }

    handleScroll(){
        let position = window.pageYOffset;
        if(position > 0)
        this.setState({
            scrolled:true
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listener);
        document.body.classList.remove('non-scrollable');
    }

    toggleDarkTheme(){
        this.setState({
            darkTheme:true
        })
    }
    toggleLightTheme(){
        this.setState({
            darkTheme:false
        })
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
                            <div className={classnames('landing-page-mobile-buttons-container',{
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
                        <div className={classnames('landing-page-top-right-content',{
                            'animate-phone-img' : this.state.mounted
                        })}>
                            <img alt="phone" className="landing-page-top-right-content-image" src={Phone4} />
                        </div>
                    </div>
                </div>
                <div className="landing-page-second-section">
                    <div className="counter-container">
                        <div>
                            {this.state.scrolled ? <CountUp end={79} duration={5}/> : null} <h2>KOLEGIJA</h2>
                        </div>
                        <div>
                            {this.state.scrolled ? <CountUp end={66} duration={4}/> : null} <h2>SMJEROVA</h2>
                        </div>
                        <div>
                            {this.state.scrolled ? <CountUp end={341} duration={6}/> : null} <h2>SKRIPTA</h2>
                        </div>
                    </div>
                    <div className="themes-container">
                        <div className="third-section">
                            <Reveal fraction={0.5} effect="slide-in">
                                {this.state.darkTheme ? <img className="dark-screen" src={dark}/> : <img className="light-screen" src={light} /> }
                            </Reveal>
                            <div className="third-section-right">
                                <Reveal delay={600} duration={900} effect="slide-in">
                                    <h1>Immersive Dark Mode</h1>
                                </Reveal>
                                <Reveal delay={1200} duration={900} effect="slide-in">
                                    <h3>Switchable live</h3>
                                </Reveal>
                                <Reveal delay={1800} duration={900} effect="slide-in">
                                    <div className="theme-switch-buttons">
                                        <button disabled={this.state.darkTheme} className="dark-button" onClick={this.toggleDarkTheme}>Dark Theme</button>
                                        <button disabled={!this.state.darkTheme} className="light-button" onClick={this.toggleLightTheme}>Light Theme</button>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-page-third-section">
                    <div className="cards-container">
                        <div className="cards">
                            <Reveal duration={900} effect="card-fade-up">
                            <div className="card card1">
                                <h1>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    vitae orci semper, tincidunt est quis ”</h1>
                            </div>
                            </Reveal>
                            <Reveal delay={200} duration={900} effect="card-fade-up">
                            <div className="card card2">
                                <h1>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ”</h1>
                            </div>
                            </Reveal>
                            <Reveal delay={400}  duration={900} effect="card-fade-up">
                            <div className="card card3">
                                <h1>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    vitae orci semper ”</h1>
                            </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="share-container">
                        <Reveal duration={900} fraction={0.7} effect="card-fade-up">
                        <div className="share-img-container">
                            <img className="share-img" src={share}/>
                        </div>
                        </Reveal>
                        <Reveal duration={900} fraction={1} effect="card-fade-up">
                        <div className="share-text-left">
                            <h1>Upload your own Scripts</h1>
                            <h3>Share your knowledge with your colleagues</h3>
                        </div>
                        </Reveal>
                    </div>
                </div>
                <div className="landing-page-fourth-section">

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(LandingPage);
