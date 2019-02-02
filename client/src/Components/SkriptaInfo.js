import React, { Component } from 'react';
import '../App.css';
import classnames from "classnames";
import close from "../Images/close.svg";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getScriptById} from "../Actions/profileActions";

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
        return (
            <div className={classnames('skripta-information ',{
                'skripta-information-mobile-toggled' : this.state.informationToggledMobile,
            })}>
                <div onClick={this.toggleInformationMobile}  className={classnames('detalji-mobile ',{
                    'make-invisible' : this.state.informationToggledMobile,
                })}>
                    <p className="detalji-toggle-button">DETALJI</p>
                </div>
                <div className={classnames('skripta-information-content ',{
                    'make-visible' : this.state.informationToggledMobile,
                })}>
                    <h1 className="skripta-comments-content-title">Detalji</h1>
                    <img alt="assd" src={close} className="mobile-close-information-button" onClick={this.toggleInformationMobile} />
                    <p><span className="bolded">Korisnik:</span> {this.props.profile.currentScript.user}</p>
                    <p><span className="bolded">Datum:</span> {this.props.profile.currentScript.date}</p>
                    <p><span className="bolded">Smjer:</span>Informatika</p>
                    <p><span className="bolded">Ocjena:</span> 4/5</p>
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
