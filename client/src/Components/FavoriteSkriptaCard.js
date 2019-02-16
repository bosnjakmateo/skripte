import React, { Component } from 'react';
import '../App.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {removeScriptFromFavorites} from "../Actions/profileActions";
import Moment from "react-moment";
import classnames from "classnames";

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
            <div className={classnames('favorite-kolegiji-card',{
                'favorite-kolegiji-card-dark' : this.props.auth.theme === "Dark"
            })}>
                <Link to={`/skripta/`+this.props.keyprop}>
                    <div className="favorite-kolegij-card-content">
                        <h1 className={classnames('favorite-kolegij-card-title',{
                            'favorite-kolegiji-card-title-dark' : this.props.auth.theme === "Dark"
                        })}>{this.props.title}</h1>
                        <p className={classnames('favorite-kolegij-card-date',{
                            'favorite-kolegij-card-date-dark' : this.props.auth.theme === "Dark"
                        })}><Moment format="DD.MM.YYYY">{timestamp}</Moment></p>
                        <p className={classnames('favorite-kolegij-card-description',{
                            'favorite-kolegij-card-description-dark' : this.props.auth.theme === "Dark"
                        })}>{this.props.description}</p>
                    </div>
                </Link>
                <div className={classnames('side-favorite-card',{
                    'side-favorite-card-dark' : this.props.auth.theme === "Dark"
                })}/>
                <div className={classnames('side-favorite-card2',{
                    'side-favorite-card-dark' : this.props.auth.theme === "Dark"
                })}/>
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
