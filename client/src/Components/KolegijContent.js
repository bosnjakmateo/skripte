import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaCard from "./SkriptaCard";
import Headroom from 'react-headroom';


class KolegijContent extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="kolegij-page">
                <Headroom disableInlineStyles={true}>
                <Navbar/>
                <div className="kolegij-second-navbar">
                    <h1 className="kolegij-second-navbar-title">Strukture podataka i algoritmi</h1>
                    <div className="kolegij-second-navbar-search">
                        <input className="kolegij-second-navbar-search-input" type="text" placeholder="Pretraži kolegij..." />
                        <select
                            className="resours-type-select">
                            <option className="hidden"> Vrsta </option>
                            <option value="Ispit">Ispit</option>
                            <option value="Kolokvij">Kolokvij</option>
                            <option value="Zadaća">Zadaća</option>
                            <option value="Seminar">Seminar</option>
                        </select>
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
            </div>
        );
    }
}

export default KolegijContent;
