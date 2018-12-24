import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { registerUser } from "../Actions/authActions";

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            password2:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWIllReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,

        };
        console.log(newUser);

        this.props.registerUser(newUser);
    }

    render() {

        return (
            <div className="registration-page">
                <div className="registration-container">
                    <div className="registration-content-left">
                        <h1>PUT YOUR CREATIVE THINKING TO WORK, WITH SKRIPTE</h1>
                    </div>
                    <div className="registration-paper">
                        <div className="registration-form">
                            <form onSubmit={this.onSubmit}>
                                <label>

                                    <div className="label">
                                        <h3>Korisničko ime:</h3>
                                        <input
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChange}

                                        />
                                    </div>

                                    <div className="label">
                                        <h3>Email:</h3>
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="label">
                                        <h3>Lozinka:</h3>
                                        <input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="label">
                                        <h3>Ponovi lozinku:</h3>
                                        <input
                                            type="password"
                                            name="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                </label>
                                <div className="register-buttons-container">
                                    <button type="submit" className="buttons-register button-registriraj-se">REGISTRACIJA</button>
                                    <span className="button-seperator">ili</span>
                                    <Link to="/login"><button className="buttons-register button-prijavi-se">PRIJAVA</button></Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Registration);