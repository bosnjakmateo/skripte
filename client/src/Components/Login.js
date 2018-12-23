import React, { Component } from 'react';
import '../App.css';
import Papers from "../Images/papers.svg"

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <div className="login-container-content">
                        <h1 className="login-header">SKRIPTE</h1>
                        <p className="login-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            vitae orci semper, tincidunt est quis, semper est.
                            Mauris consectetur
                        </p>
                        <div className="login-forms">
                            <form>
                                <label>
                                    <input type="text" name="name" placeholder="Email" />
                                    <br />
                                    <input type="text" name="name" placeholder="Lozinka" />
                                </label>
                            </form>
                        </div>
                        <div className="login-buttons-container">
                            <button className="buttons-login button-prijava">PRIJAVA</button>
                            <span className="button-seperator">ili</span>
                            <button className="buttons-login button-registracija">REGISTRACIJA</button>
                        </div>
                    </div>
                </div>
                <div className="paper-container">
                    <img className="paper-image" src={Papers}/>
                </div>
            </div>
        );
    }
}

export default Login;
