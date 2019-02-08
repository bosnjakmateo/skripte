import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import KolegijCard from "./KolegijCard";
import FavoriteSkriptaCard from "./FavoriteSkriptaCard";
import Headroom from 'react-headroom';
import classnames from 'classnames';
import {getCurrentUser, setProfileLoading} from "../Actions/authActions";
import {getFavoriteSubject, getAllSubjects, filtered, getAllScripts,filtered3} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "./Spinner"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted:false,
            data:[],
            currentUser:false
        };

        this.filterFavoriteSubjectsFromAll = this.filterFavoriteSubjectsFromAll.bind(this);
        this.filterFavoriteScriptsFromAll = this.filterFavoriteScriptsFromAll.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUser();
        this.setState({
            mounted:true,
            currentUser:true
        });
    }

    componentDidUpdate(prevProps, nextState) {

        if(this.props.auth.userFetched !== prevProps.auth.userFetched || this.state.currentUser !== nextState.currentUser){
            this.props.getAllSubjects();
            this.props.getAllScripts();
        }

        if (this.props.profile.allSubjects !== prevProps.profile.allSubjects && this.props.auth.loading === false  ) {
            this.filterFavoriteSubjectsFromAll();
        }
        if (this.props.profile.allScripts !== prevProps.profile.allScripts && this.props.auth.loading === false  ) {
            this.filterFavoriteScriptsFromAll();
        }
    }

    filterFavoriteSubjectsFromAll(){
        let allSubjects = this.props.profile.allSubjects
        let favoriteSubjects = this.props.auth.userData.favoriteSubjects
        console.log(allSubjects)
        console.log(favoriteSubjects)
        let favorites = allSubjects.filter(item => favoriteSubjects.find(item2 => item._id === item2._subject))
        this.props.filtered(favorites)
    }

    filterFavoriteScriptsFromAll(){
        console.log(allScripts)
        console.log(allScripts)
        let allScripts = this.props.profile.allScripts;
        let favoriteScripts = this.props.auth.userData.favoriteScripts
        let favorites = allScripts.filter(item => favoriteScripts.find(item2 => item._id === item2._script))
        this.props.filtered3(favorites)
    }


    render() {
        return (
            <div className="home-page">
                <Headroom disableInlineStyles={true}>
                    <Navbar/>
                    <div className="second-navbar">
                        <h1 className="second-navbar-title">Dashboard</h1>
                        {/*
                    <div className="second-navbar-search">
                        <input className="second-navbar-search-input" type="text" placeholder="Pretraži kolegij..." />
                    </div>
                    */}
                    </div>
                </Headroom>
                <div className={classnames('main-container',{
                    'fade-in-keyframes' : this.state.mounted
                })}>
                    <div className="kolegij-card-container">
                        <div className="favorite-subjects">
                            <div className="favorite-subjects-name-container">
                                <h1 className="favorite-kolegiji-name">Omiljeni Kolegiji</h1>
                            </div>
                            { this.props.auth.loading ? <Spinner/>
                                : this.props.profile.filteredSubjects.map((item) =>
                                  <KolegijCard keyprop={item._id} key={item._id} title={item.name}/>
                            )}
                        </div>
                    </div>
                    <div className="favorite-kolegiji-container">
                        <div className="favorite-kolegiji">
                            <div className="favorite-kolegiji-name-container">
                                <h1 className="favorite-kolegiji-name">Omiljene Skripte</h1>
                            </div>
                            {this.props.auth.loading ? <Spinner/>
                                : this.props.profile.filteredFavoriteScripts.map((item) =>
                                        <FavoriteSkriptaCard keyprop={item._id} key={item._id} title={item.title} description={item.description} date={item.date}/>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userFavoriteSubjects: state.auth.userData.favoriteSubjects,
    auth:state.auth,
    profile:state.profile
});

export default withRouter(connect(mapStateToProps, {getCurrentUser,getFavoriteSubject,setProfileLoading,getAllSubjects,filtered,filtered3,getAllScripts})(Home))
