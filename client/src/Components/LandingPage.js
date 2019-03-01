import React, { Component } from 'react';
import '../App.css';
import dark from "../Images/darkScreen6.png"
import light from "../Images/lightScreen4.png"
import arrowUp from "../Images/arrowUp.svg"
import secondImg from "../Images/UploadYourOwnScript.svg"
import thirdImg from "../Images/thirdImg2.png"
import fourthImg from "../Images/fourthImg.png"
import responsive from "../Images/responsive.svg"
import userFriendly from "../Images/userFriendly.svg"
import fast from "../Images/fast.svg"
import arrowDown from "../Images/arrowDown.svg"
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
            darkTheme:true,
            scrolledToBottom:false
        };

        this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
        this.toggleLightTheme = this.toggleLightTheme.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
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
        if(position > 0){
        this.setState({
            scrolled:true
        })
        }
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            this.setState({
                scrolledToBottom:true
            })
        }
        if(position < 700){
            this.setState({
                scrolledToBottom:false
            })
        }
    }

    scrollToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
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
                                vitae orci semper, tincidunt est quis, semper est</p>
                            <img alt="arrow down" className="arrowDown" src={arrowDown} />
                            <div className={classnames('landing-page-mobile-buttons-container',{
                                'button-fade-in' : this.state.mounted
                            })}>
                                <Link to="/login">
                                    <button className="mobile-login">PRIJAVA</button>
                                </Link>
                                <Link to="/register">
                                    <button className="mobile-register">REGISTRACIJA</button>
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
                <div className="second-section">
                    <Reveal duration={900} fraction={0.6} effect="card-fade-up">
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
                    </Reveal>
                    <div className="second-section-contents">
                        <Reveal duration={900} fraction={0.8} effect="card-fade-up">
                        <div className="second-section-left">
                            <img alt="second" src={secondImg} />
                        </div>
                        <div className="second-section-right">
                            <h1>Upload your own Scripts</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est</p>
                        </div>
                        </Reveal>
                    </div>
                </div>
                <div className="third-section">
                    <div className="third-section-contents">
                        <Reveal duration={900} fraction={0.8} effect="card-fade-up">
                        <div className="third-section-left">
                            <h1>Read Scripts from anywhere</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est</p>
                        </div>
                        <div className="third-section-right">
                            <img alt="third" src={thirdImg} />
                        </div>
                        </Reveal>
                    </div>
                </div>
                <div className="fourth-section">
                    <div className="fourth-section-contents">
                        <Reveal duration={900} fraction={0.8} effect="card-fade-up">
                        <div className="fourth-section-left">
                            <img alt="fourth" src={fourthImg} />
                        </div>
                        <div className="fourth-section-right">
                            <h1>Comment Rate and Share</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                vitae orci semper, tincidunt est quis, semper est</p>
                        </div>
                        </Reveal>
                    </div>
                </div>
                <div className="fifth-section">
                    <div className="fifth-section-contents">
                        <Reveal duration={900} fraction={1} effect="card-fade-up">
                        <div className="fifth-section-left">
                            {this.state.darkTheme ?
                                <img alt="dark screen" className="dark-screen" src={dark}/>
                                :
                                <img alt="light screen" className="light-screen" src={light} />
                            }
                        </div>
                        <div className="fifth-section-right">
                                <h1>With Immersive Dark Mode</h1>
                                <h3>Switchable live</h3>
                                <div className="theme-switch-buttons">
                                    {!this.state.darkTheme ?
                                    <button className="dark-button" onClick={this.toggleDarkTheme}>Dark Theme</button>
                                        :
                                    <button className="light-button" onClick={this.toggleLightTheme}>Light Theme</button>
                                    }
                                </div>
                        </div>
                        </Reveal>
                    </div>
                </div>
                <div className="sixth-section">
                    <div className="sixth-section-contents">
                        <Reveal duration={900} fraction={0.1} effect="card-fade-up">
                        <div className="sixth-cards">
                            <div className="landing-card">
                                <h1>RESPONSIVE</h1>
                                <img alt="responsive" src={responsive}/>
                            </div>
                            <div className="landing-card">
                                <h1>USER FRIENDLY</h1>
                                <img alt="user friendly" src={userFriendly}/>
                            </div>
                            <div className="landing-card">
                                <h1>BLAZING FAST</h1>
                                <img alt="fast" src={fast}/>
                            </div>
                        </div>
                        </Reveal>
                    </div>
                    <div className="last-section-content">
                        <Link to="/register">
                            <button>Get Started</button>
                        </Link>
                        {this.state.scrolledToBottom ?
                            <img alt="arrow up" className="arrow-up" src={arrowUp} onClick={this.scrollToTop}/>
                        :
                            null
                        }
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
