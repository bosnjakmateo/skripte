import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";


class Skripta extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="skripta-page">
                <Navbar/>
                <div className="skripta-second-navbar">
                    <h1 className="skripta-second-navbar-title">Strukture podataka i algoritmi</h1>
                    <p className="skripta-second-navbar-description">Usmeni 21.12.2012</p>
                </div>
                <div className="skripta-page-content">
                    <div className="pdf-container">
                        <embed id="asd" src="http://www.pdf995.com/samples/pdf.pdf"/>
                    </div>
                    <div className="skripta-content-right">
                        <div className="skripta-information">
                            <div className="skripta-information-content">
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
                        <div className="skripta-comments">
                            <div className="skripta-comments-content">
                                <h1 className="skripta-comments-content-title">Komentari<span>(12)</span></h1>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                                <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    vitae orci semper, tincidunt est quis,
                                    semper est.Mauris consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skripta;
