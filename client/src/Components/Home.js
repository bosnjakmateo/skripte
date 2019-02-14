import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import KolegijCard from "./KolegijCard";
import FavoriteSkriptaCard from "./FavoriteSkriptaCard";
import Headroom from 'react-headroom';
import classnames from 'classnames';
import {getCurrentUser, setProfileLoading} from "../Actions/authActions";
import {getFavoriteSubject, getAllSubjects, filtered, getAllScripts,filtered3,completeTutorial} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "./Spinner"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted:false,
            data:[],
            currentUser:false,
            tutorial:false,
            tutorialFirstPartComplete:true,
            tutorialSecondPartComplete:true,
            tutorialThirdPartComplete:true,
            tutorialCompleted:false,
        };

        this.filterFavoriteSubjectsFromAll = this.filterFavoriteSubjectsFromAll.bind(this);
        this.filterFavoriteScriptsFromAll = this.filterFavoriteScriptsFromAll.bind(this);
        this.completeFirstPart = this.completeFirstPart.bind(this);
        this.completeSecondPart = this.completeSecondPart.bind(this);
        this.completeThirdPart = this.completeThirdPart.bind(this);
        this.completeTutorial = this.completeTutorial.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUser();
        this.setState({
            mounted:true,
            currentUser:true,
        });
    }

    componentDidUpdate(prevProps, nextState) {

        if(this.props.auth.userFetched !== prevProps.auth.userFetched || this.state.currentUser !== nextState.currentUser){
            this.props.getAllSubjects();
            this.props.getAllScripts();
            if(this.props.auth.userData.tutorial === false && window.innerWidth < 1000){
                this.completeTutorial();
            }
            if(this.props.auth.userData.tutorial === false && window.innerWidth > 1000){
                this.setState({
                    tutorialFirstPartComplete:false,
                    tutorial:true
                })
            }
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
        let favorites = allSubjects.filter(item => favoriteSubjects.find(item2 => item._id === item2._id))
        this.props.filtered(favorites)
    }

    filterFavoriteScriptsFromAll(){
        let allScripts = this.props.profile.allScripts;
        let favoriteScripts = this.props.auth.userData.favoriteScripts
        let favorites = allScripts.filter(item => favoriteScripts.find(item2 => item._id === item2._id))
        this.props.filtered3(favorites)
    }


    completeFirstPart(){
        this.setState({
            tutorialFirstPartComplete:true,
            tutorialSecondPartComplete:false,
            tutorialThirdPartComplete:true
        })
    }
    completeSecondPart(){
        this.setState({
            tutorialFirstPartComplete:true,
            tutorialSecondPartComplete:true,
            tutorialThirdPartComplete:false
        })
    }
    completeThirdPart(){
        this.setState({
            tutorialFirstPartComplete:true,
            tutorialSecondPartComplete:true,
            tutorialThirdPartComplete:true,
            tutorial:false,
            tutorialCompleted:true
        })
        this.completeTutorial();
    }

    completeTutorial(){
        this.props.completeTutorial();
    }


    render() {
        console.log(window.innerWidth)
        return (
            <div className="home-page">
                <div className={classnames('',{
                    'fade-to-save-eyes' : this.state.tutorialCompleted && this.state.tutorialThirdPartComplete
                })}>
                { this.state.tutorial && this.state.mounted ?
                    <div className="tut">
                        {this.state.tutorial && this.state.tutorialThirdPartComplete ? null :
                            <div className="third-intro">
                                <div className="third-intro-content-container">
                                    <div className="third-intro-content">
                                        <h2>third intro</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem erat.
                                            Donec at
                                            elit
                                            id erat feugiat malesuada et in ex. Donec consectetur felis arcu, vitae
                                            facilisis
                                            ante sollicitudin sit amet
                                        </p>
                                        <button onClick={this.completeThirdPart}
                                                className="third-continue-button">Pronađi Kolegij
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                        {this.state.tutorial && this.state.tutorialSecondPartComplete ? null :
                    <div className="left-intro">
                        <div className="left-intro-content-container">
                            <div className="left-intro-content">
                                <h2>right intro</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem erat. Donec at
                                    elit
                                    id erat feugiat malesuada et in ex. Donec consectetur felis arcu, vitae facilisis
                                    ante sollicitudin sit amet
                                </p>
                                <button onClick={this.completeSecondPart} className="left-continue-button">Nastavi</button>
                            </div>
                        </div>
                    </div>
                    }
                    { this.state.tutorial && this.state.tutorialFirstPartComplete ? null :
                        <div className="right-intro">
                            <div className={classnames('right-intro-content-container',{
                                'slide-in-from-right' : this.state.mounted
                            })}>
                                <div className="right-intro-content">
                                    <h2>right intro</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem erat. Donec at
                                        elit
                                        id erat feugiat malesuada et in ex. Donec consectetur felis arcu, vitae facilisis
                                        ante sollicitudin sit amet
                                    </p>
                                    <button onClick={this.completeFirstPart} className="right-continue-button">Nastavi</button>
                                </div>
                            </div>
                    </div>
                    }
                </div>
                : null}
                </div>
                <Headroom disableInlineStyles={true}>
                    <Navbar/>
                    <div className="second-navbar">
                        <h1 className="second-navbar-title">Dashboard</h1>
                    </div>
                </Headroom>
                <div className={classnames('main-container',{
                    'fade-in-keyframes' : this.state.mounted
                })}>
                    <div className="kolegij-card-container">
                        <div className={classnames("favorite-subjects",{
                        "favorite-subjects-tutorial" : this.state.tutorial && !this.state.tutorialFirstPartComplete
                        })}>
                            <div className="favorite-subjects-name-container">
                                <h1 className="favorite-kolegiji-name">Omiljeni Kolegiji</h1>
                            </div>
                            { this.state.tutorialFirstPartComplete ? null :
                                <div>
                                    <div className="tutorial-kolegij-card tutorial-card-1">
                                        <h1 className="kolegij-card-title">Programiranje</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-2">
                                        <h1 className="kolegij-card-title">Strukture Podataka i Algoritmi</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-3">
                                        <h1 className="kolegij-card-title">Matematika</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-4">
                                        <h1 className="kolegij-card-title">Modeliranje i Simulacija</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-5">
                                        <h1 className="kolegij-card-title">Baze Podataka I</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-6">
                                        <h1 className="kolegij-card-title">Engleski Jezik</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-7">
                                        <h1 className="kolegij-card-title">Ekonomija za Informatičare</h1>
                                    </div>
                                    <div className="tutorial-kolegij-card tutorial-card-8">
                                        <h1 className="kolegij-card-title">Tjelesni</h1>
                                    </div>
                                </div>
                                }
                            { this.props.auth.loading ? <Spinner/>
                                : this.props.profile.filteredSubjects.map((item) =>
                                  <KolegijCard keyprop={item._id} key={item._id} title={item.name}/>
                            )}
                        </div>
                    </div>
                    <div className="favorite-kolegiji-container">
                        <div className={classnames("favorite-kolegiji",{
                            "favorite-scripts-tutorial" : this.state.tutorial && !this.state.tutorialSecondPartComplete
                        })}>
                            <div className="favorite-kolegiji-name-container">
                                <h1 className="favorite-kolegiji-name">Omiljene Skripte</h1>
                            </div>
                            {this.state.tutorialSecondPartComplete ? null :
                                <div>
                                    <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-1">
                                        <div className="favorite-kolegij-card-content">
                                            <h1 className="favorite-kolegij-card-title">Skripta za Matematiku</h1>
                                            <p className="favorite-kolegij-card-date">19.01.2019</p>
                                            <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Morbi et sem erat. Donec at
                                                elit id erat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-2">
                                        <div className="favorite-kolegij-card-content">
                                            <h1 className="favorite-kolegij-card-title">Skripta za Programiranje</h1>
                                            <p className="favorite-kolegij-card-date">19.01.2019</p>
                                            <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Morbi et sem erat. Donec at
                                                elit id erat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-3">
                                        <div className="favorite-kolegij-card-content">
                                            <h1 className="favorite-kolegij-card-title">Skripta za Strukture podataka i algoritmi</h1>
                                            <p className="favorite-kolegij-card-date">19.01.2019</p>
                                            <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Morbi et sem erat. Donec at
                                                elit id erat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-4">
                                        <div className="favorite-kolegij-card-content">
                                            <h1 className="favorite-kolegij-card-title">Skripta za Fiziku</h1>
                                            <p className="favorite-kolegij-card-date">19.01.2019</p>
                                            <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Morbi et sem erat. Donec at
                                                elit id erat.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            }
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

export default withRouter(connect(mapStateToProps, {getCurrentUser,getFavoriteSubject,setProfileLoading,getAllSubjects,filtered,filtered3,getAllScripts,completeTutorial})(Home))
