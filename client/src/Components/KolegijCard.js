import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import removeIcon from "../Images/remove.svg"
import {removeSubjectFromFavorites} from "../Actions/profileActions";
import {connect} from "react-redux";

class KolegijCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.removeKolegij = this.removeKolegij.bind(this);
    }

    removeKolegij(e){
        e.preventDefault();
        this.props.removeSubjectFromFavorites(this.props.keyprop);
    }


    render() {

        return (
            <Link to={`/kolegij/`+this.props.keyprop}>
                <div className="kolegij-card">
                    <h1 className="kolegij-card-title">{this.props.title}</h1>
                    <img alt="remove-button" onClick={this.removeKolegij} src={removeIcon} className="remove-kolegij-card"/>
                </div>
            </Link>
        );
    }
}

const mapStateToProps = (state) => ({
    userFavoriteSubjects: state.auth.userData.favoriteSubjects,
    auth:state.auth,
    profile:state.profile
});

export default withRouter(connect(mapStateToProps, {removeSubjectFromFavorites})(KolegijCard))