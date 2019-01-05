import React, { Component } from 'react';
import '../App.css';
import classnames from "classnames";
import close from "../Images/close.svg";

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
                    <img src={close} className="mobile-close-information-button" onClick={this.toggleInformationMobile} />
                    <p><span className="bolded">Korisnik:</span> ivanbalen666</p>
                    <p><span className="bolded">Kolegij:</span> Strukture podataka i algoritmi</p>
                    <p><span className="bolded">Datum:</span> 21.11.2012</p>
                    <p><span className="bolded">Smjer:</span> Informatika</p>
                    <p><span className="bolded">Ocjena:</span> ivanbalen666</p>
                    <p><span className="bolded">Opis:</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aliquam
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consectetur
                    </p>
                </div>
            </div>
        );
    }
}

export default SkriptaInfo;
