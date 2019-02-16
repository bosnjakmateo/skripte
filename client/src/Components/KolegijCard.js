import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import {removeSubjectFromFavorites} from "../Actions/profileActions";
import {connect} from "react-redux";
import classnames from "classnames";

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
                <div className={classnames('kolegij-card',{
                    'kolegij-card-dark' : this.props.profile.theme === "dark"
                })}>
                    <h1 className={classnames('kolegij-card-title',{
                        'kolegij-card-title-dark' : this.props.profile.theme === "dark"
                    })}>{this.props.title}</h1>
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