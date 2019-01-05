import React, { Component } from 'react';
import '../App.css';
import Papers from "../Images/papers.svg"
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { loginUser } from "../Actions/authActions";
import PropTypes from 'prop-types';
import classnames from "classnames";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    render() {
        const {errors} = this.state;

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
                                        className={classnames('empty',{
                                            'make-red shake' : errors.email
                                        })}
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <br />
                                    <input
                                        className={classnames('empty',{
                                            'make-red shake' : errors.password
                                        })}
                                        type="password"
                                           name="password"
                                           placeholder="lozinka"
                                           value={this.state.password}
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
                    <img alt="login" className="paper-image" src={Papers}/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

