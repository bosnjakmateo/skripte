import React, { Component } from 'react';
import '../App.css';

class Registration extends Component {
    render() {
        return (
            <div className="registration-page">
                <div className="registration-container">
                    <div className="registration-content-left">
                        <h1>PUT YOUR CREATIVE THINKING TO WORK, WITH SKRIPTE</h1>
                    </div>
                    <div className="registration-paper">
                        <div className="registration-form">
                            <form>
                                <label>

                                    <div className="label">
                                        <h3>Korisničko ime:</h3>
                                        <input type="text" name="name" />
                                    </div>

                                    <div className="label">
                                        <h3>Email:</h3>
                                        <input type="text" name="name" />
                                    </div>

                                    <div className="label">
                                        <h3>Lozinka:</h3>
                                        <input type="text" name="name" />
                                    </div>

                                    <div className="label">
                                        <h3>Ponovi lozinku:</h3>
                                        <input type="text" name="name" />
                                    </div>

                                </label>
                            </form>
                            <div className="register-buttons-container">
                                <button className="buttons-register button-registriraj-se">REGISTRACIJA</button>
                                <span className="button-seperator">ili</span>
                                <button className="buttons-register button-prijavi-se">PRIJAVA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
