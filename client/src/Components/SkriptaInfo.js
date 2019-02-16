import React, { Component } from 'react';
import '../App.css';
import classnames from "classnames";
import close from "../Images/close.svg";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getScriptById} from "../Actions/profileActions";
import Moment from "react-moment";

class SkriptaInfo extends Component {
    constructor(props){
        super(props);
        this.state = { informationToggledMobile: false};

        this.toggleInformationMobile = this.toggleInformationMobile.bind(this);
    }

    toggleInformationMobile () {
        this.setState({ informationToggledMobile: !this.state.informationToggledMobile });
    }

    render() {
        let timestamp = Date.parse(this.props.profile.currentScript.date);
        return (
            <div className={classnames('skripta-information ',{
                'skripta-information-mobile-toggled' : this.state.informationToggledMobile,
                'skripta-information-dark' : this.props.auth.theme === "Dark"
            })}>
                <div onClick={this.toggleInformationMobile}  className={classnames('detalji-mobile ',{
                    'make-invisible' : this.state.informationToggledMobile,
                })}>
                    <p className={classnames('detalji-toggle-button',{
                        'detalji-toggle-button-dark' : this.props.auth.theme === "Dark"
                    })}>
                        DETALJI</p>
                </div>
                <div className={classnames('skripta-information-content ',{
                    'make-visible' : this.state.informationToggledMobile,
                })}>
                    <h1 className={classnames('skripta-comments-content-title ',{
                        'skripta-comments-content-title-dark' : this.props.auth.theme === "Dark"
                    })}>
                        Detalji</h1>
                    <img alt="assd" src={close} className="mobile-close-information-button" onClick={this.toggleInformationMobile} />
                    <p><span className="bolded">Korisnik:</span> {this.props.profile.currentScript.user}</p>
                    <span className="bolded">Datum: <Moment format="DD.MM.YYYY">{timestamp}</Moment></span>
                    <p><span className="bolded">Smjer:</span>Informatika</p>
                    <p><span className="bolded">Opis:</span> {this.props.profile.currentScript.description}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {getScriptById})(SkriptaInfo))
