import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import addKolegij from "../Images/addKolegij.svg"
import addKolegijDark from "../Images/addKolegijDark.svg"
import classnames from "classnames";
import {connect} from "react-redux";


class AddKolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

    }

    render() {

        return (
            <Link to={"/institucije"}>
                <div className={classnames('add-kolegij-card',{
                    'add-kolegij-card-dark' : this.props.auth.theme === "Dark"
                })}>
                    {this.props.auth.theme === "Dark" ? <img className="add-kolegij-card-button" src={addKolegijDark} alt="add new kolegij" title="dodaj novi kolegij"/>
                        :
                        <img className="add-kolegij-card-button" src={addKolegij} alt="add new kolegij" title="dodaj novi kolegij"/>
                    }
                </div>
            </Link>
        );
    }
}


const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth
});

export default withRouter(connect(mapStateToProps, {})(AddKolegijCard))