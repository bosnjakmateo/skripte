import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaCard from "./SkriptaCard";
import Headroom from 'react-headroom';
import UploadModal from "./UploadModal";

class KolegijContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            modalIsOpen:!this.state.modalIsOpen
        })
    }

    render() {
        return (
            <div className="kolegij-page">
                <Headroom disableInlineStyles={true}>
                <Navbar/>
                <div className="kolegij-second-navbar">
                    <h1 className="kolegij-second-navbar-title">Strukture podataka i algoritmi</h1>
                    <div className="kolegij-second-navbar-search">
                        <input className="kolegij-second-navbar-search-input" type="text" placeholder="Traži skriptu..." />
                        <select
                            className="resours-type-select">
                            <option className="hidden"> Godina </option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                        </select>
                        <div onClick={this.toggleModal} className="upload-skripta-button-container">
                            <div className="upload-skripta-button">
                                <p id="txt">UPLODAJ</p>
                                <div className="mask3"/>
                            </div>
                        </div>
                    </div>
                </div>
                </Headroom>
                <div className="skripte-container">
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                    <SkriptaCard/>
                </div>
                {this.state.modalIsOpen === true ?
                    <UploadModal modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
                    : null}
            </div>
        );
    }
}

export default KolegijContent;
