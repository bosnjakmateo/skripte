import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { registerUser } from "../Actions/authActions";
import classnames from 'classnames';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            password2:"",
            errors: {},
            secondPassword:false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/home")
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
            this.props.registerUser(newUser, this.props.history);
            if(this.state.password !== this.state.password2){
                this.setState({
                    secondPassword:true
                })
            }else{
                this.setState({
                    secondPassword:false
                })
            }
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="registration-page">
                <div className="registration-container">
                    <div className="registration-content-left">
                        <h1>IZRADI SVOJ JEDINSTVENI RAČUN ZA SKRIPTE</h1>
                    </div>
                    <div className="registration-paper">
                        <div className="registration-form">
                            <form onSubmit={this.onSubmit}>
                                <label>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.username
                                            })}
                                        >
                                            Korisničko ime:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.username
                                            })}
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                        />
                                        {errors.username ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.username}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.email
                                            })}
                                        >
                                            Email:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.email
                                            })}
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        {errors.email ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.email}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.password
                                            })}
                                        >
                                            Lozinka:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.password
                                            })}
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        {errors.password ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.password}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : this.state.secondPassword || errors.password
                                            })}
                                        >
                                            Ponovi lozinku:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : this.state.secondPassword || errors.password
                                            })}
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
