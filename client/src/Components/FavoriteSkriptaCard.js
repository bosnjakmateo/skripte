import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {removeScriptFromFavorites} from "../Actions/profileActions";
import Moment from "react-moment";

class FavoriteSkriptaCard extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.removeSkripta = this.removeSkripta.bind(this);
}

removeSkripta(e){
    e.preventDefault();
    this.props.removeScriptFromFavorites(this.props.keyprop)
}


    render() {
        let timestamp = Date.parse(this.props.date);
        return (
            <div className="favorite-kolegiji-card">
                <Link to={`/skripta/`+this.props.keyprop}>
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">{this.props.title}</h1>
                        <p className="favorite-kolegij-card-date"><Moment format="DD.MM.YYYY">{timestamp}</Moment></p>
                        <p className="favorite-kolegij-card-description">{this.props.description}</p>
                    </div>
                </Link>
                <div className="side-favorite-card"/>
                <div className="side-favorite-card2"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userFavoriteSubjects: state.auth.userData.favoriteSubjects,
    auth:state.auth,
    profile:state.profile
});

export default withRouter(connect(mapStateToProps, {removeScriptFromFavorites})(FavoriteSkriptaCard))
