import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import KolegijCard from "./KolegijCard";
import FavoriteSkriptaCard from "./FavoriteSkriptaCard";
import Headroom from 'react-headroom';
import classnames from 'classnames';
import {getCurrentUser, setProfileLoading} from "../Actions/authActions";
import {getAllSubjects, filtered, getAllScripts,filtered3,completeTutorial} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "./Spinner"
import TutorialKolegijCardPlaceholders from "./tutorial/TutorialKolegijCardPlaceholders";
import TutorialSkriptaCardPlaceholders from "./tutorial/TutorialSkriptaCardPlaceholders";
import ThirdIntro from "./tutorial/ThirdIntro";
import FirstIntro from "./tutorial/FirstIntro";
import SecondIntro from "./tutorial/SecondIntro";
import AddKolegijCard from "./AddKolegijCard";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted:false,
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
        let allSubjects = this.props.profile.allSubjects;
        let favoriteSubjects = this.props.auth.userData.favoriteSubjects;
        let favorites = allSubjects.filter(item => favoriteSubjects.find(item2 => item._id === item2._id));
        this.props.filtered(favorites)
    }

    filterFavoriteScriptsFromAll(){
        let allScripts = this.props.profile.allScripts;
        let favoriteScripts = this.props.auth.userData.favoriteScripts;
        let favorites = allScripts.filter(item => favoriteScripts.find(item2 => item._id === item2._id));
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
        });
        this.completeTutorial();
    }

    completeTutorial(){
        this.props.completeTutorial();
    }

    render() {
        return (
            <div className="home-page">
                <div className={classnames('',{
                    'fade-to-save-eyes' : this.state.tutorialCompleted && this.state.tutorialThirdPartComplete
                })}>
                {
                    this.state.tutorial && this.state.mounted ?
                        <div className="tut">
                            {this.state.tutorial && this.state.tutorialThirdPartComplete ? null :
                                <ThirdIntro completeThirdPart={this.completeThirdPart}/>
                            }
                            {this.state.tutorial && this.state.tutorialSecondPartComplete ? null :
                                <SecondIntro completeSecondPart={this.completeSecondPart} skipTutorial={this.completeThirdPart}/>
                            }
                            { this.state.tutorial && this.state.tutorialFirstPartComplete ? null :
                                <FirstIntro mounted={this.state.mounted} skipTutorial={this.completeThirdPart} completeFirstPart={this.completeFirstPart}/>
                            }
                        </div>
                    : null
                }
                </div>
                <Headroom disableInlineStyles={true}>
                    <Navbar/>
                    <div className={classnames('second-navbar',{
                        'second-navbar-dark' : this.props.profile.theme === "dark"
                    })}>
                        <h1 className={classnames('second-navbar-title',{
                            'second-navbar-dark-title' : this.props.profile.theme === "dark"
                        })}>Dashboard</h1>
                    </div>
                </Headroom>
                <div className={classnames('main-container',{
                    'fade-in-keyframes' : this.state.mounted
                })}>
                    <div className="kolegij-card-container">
                        <div className={classnames("favorite-subjects",{
                        "favorite-subjects-tutorial" : this.state.tutorial && !this.state.tutorialFirstPartComplete,
                            "favorite-subjects-dark" : this.props.profile.theme === "dark"
                        })}>
                            <div className={classnames('favorite-subjects-name-container',{
                                'favorite-subjects-name-container-dark' : this.props.profile.theme === "dark"
                            })}>
                                <h1 className="favorite-kolegiji-name">Omiljeni Kolegiji</h1>
                            </div>
                            { this.state.tutorialFirstPartComplete ? null :
                                <TutorialKolegijCardPlaceholders/>
                            }
                            { this.props.auth.loading ? <Spinner/>
                                : this.props.profile.filteredSubjects.map((item) =>
                                  <KolegijCard keyprop={item._id} key={item._id} title={item.name}/>
                            )}
                            <AddKolegijCard/>
                        </div>
                    </div>
                    <div className="favorite-kolegiji-container">
                        <div className={classnames("favorite-kolegiji",{
                            "favorite-scripts-tutorial" : this.state.tutorial && !this.state.tutorialSecondPartComplete,
                            "favorite-kolegiji-dark" : this.props.profile.theme === "dark"
                        })}>
                            <div className={classnames('favorite-kolegiji-name-container',{
                                'favorite-kolegiji-name-container-dark' : this.props.profile.theme === "dark"
                            })}>
                                <h1 className="favorite-kolegiji-name">Omiljene Skripte</h1>
                            </div>
                            {this.state.tutorialSecondPartComplete ? null :
                                <TutorialSkriptaCardPlaceholders/>
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

export default withRouter(connect(mapStateToProps, {getCurrentUser,setProfileLoading,getAllSubjects,filtered,filtered3,getAllScripts,completeTutorial})(Home))
