import React, { Component } from 'react';
import '../App.css';
import Papers from "../Images/papers.svg"
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            lozinka:""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const user = {
            email: this.state.email,
            lozinka: this.state.lozinka
        };

        console.log(user)
    }


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
                            <form onSubmit={this.onSubmit}>
                                <label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <br />
                                    <input type="password"
                                           name="lozinka"
                                           placeholder="Lozinka"
                                           value={this.state.lozinka}
                                           onChange={this.onChange}
                                    />
                                </label>
                                <div className="login-buttons-container">
                                    <button type="submit" className="buttons-login button-prijava">PRIJAVA</button>
                                    <span className="button-seperator">ili</span>
                                    <Link to="/register"><button className="buttons-login button-registracija">REGISTRACIJA</button></Link>
                                </div>
                            </form>
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
