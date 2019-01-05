import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";


class UploadSkripta extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }


    render() {

        return (
            <div className="upload-skripta-page">
                <Navbar/>
                <div className="upload-skripta-container">
                    <div className="upload-skripta-content">
                        <h1 className="upload-skripta-title">OBJAVI SKRIPTU</h1>
                        <form>
                            <div className="upload-skripta-component">
                                <select
                                    className="upload-select">
                                    <option className="hidden"> VRSTA INSTITUCIJE </option>
                                    <option value="Sveučilište">Sveučilište</option>
                                    <option value="Veleučilište">Veleučilište</option>
                                </select>
                            </div>

                            <div className="upload-skripta-component">
                                <select
                                    className="upload-select">
                                    <option className="hidden"> MJESTO SVEUČILIŠTA </option>
                                    <option value="Sveučilište">Sveučilište</option>
                                    <option value="Veleučilište">Veleučilište</option>
                                </select>
                            </div>

                            <div className="upload-skripta-component">
                                <select
                                    className="upload-select">
                                    <option className="hidden"> ODJEL </option>
                                    <option value="Sveučilište">Sveučilište</option>
                                    <option value="Veleučilište">Veleučilište</option>
                                </select>
                            </div>

                            <div className="upload-skripta-component">
                                <select
                                    className="upload-select">
                                    <option className="hidden"> SEMESTAR </option>
                                    <option value="Sveučilište">Sveučilište</option>
                                    <option value="Veleučilište">Veleučilište</option>
                                </select>
                            </div>

                            <div className="upload-skripta-component">
                                <select
                                    className="upload-select">
                                    <option className="hidden"> KOLEGIJ </option>
                                    <option value="Sveučilište">Sveučilište</option>
                                    <option value="Veleučilište">Veleučilište</option>
                                </select>
                            </div>


                            <div className="upload-skripta-component">
                                <input type="file"/>
                            </div>

                            <div className="upload-skripta-component">
                                <button>UPLODAJ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadSkripta;
