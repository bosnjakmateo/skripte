import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaCard from "./SkriptaCard";
import Headroom from 'react-headroom';
import UploadModal from "./UploadModal";
import {withRouter} from "react-router-dom";
import {
    getSubjectById,
    getAllScripts,
    filtered2,
    clearScripts,
    addSubjectToFavorites,
    removeSubjectFromFavorites
} from "../Actions/profileActions";
import {connect} from "react-redux";
import Spinner from "./Spinner";
import classnames from "classnames";


class KolegijContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            subjectAlreadyInFavorites:false,
            query:"",
            mounted:false,
            loading:true
        };

        this.addToFavorites = this.addToFavorites.bind(this);
        this.asd3 = this.asd3.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
        this.checkIfAlreadyInFavorites = this.checkIfAlreadyInFavorites.bind(this)
        this.setQuery = this.setQuery.bind(this);
        this.removeSubject = this.removeSubject.bind(this);
    }

    toggleModal(){
        this.setState({
            modalIsOpen:!this.state.modalIsOpen
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.profile.allScripts !== prevProps.profile.allScripts) {
            this.setState({
                loading:true
            })
            this.asd3()
            this.checkIfAlreadyInFavorites();
        }
        if(this.props.profile.urlError !== prevProps.profile.urlError){
            window.location.href = '/home';
        }
    }

    asd3(){
        let res = this.props.profile.allScripts.filter(a => a._subject.includes(this.props.match.params.kolegij_id));
        this.props.filtered2(res)
    }

    componentDidMount(){
        this.props.getSubjectById(this.props.match.params.kolegij_id)
        this.props.getAllScripts()
        this.setState({
            mounted:true
        })
    }



    addToFavorites(){
        this.props.addSubjectToFavorites(this.props.match.params.kolegij_id)
        this.setState({
            subjectAlreadyInFavorites: true
        })
    }

    removeSubject(e){
        e.preventDefault();
        this.props.removeSubjectFromFavorites(this.props.match.params.kolegij_id)
        this.setState({
            subjectAlreadyInFavorites: false
        })
    }


    checkIfAlreadyInFavorites(){
        let ress = this.props.auth.userData.favoriteSubjects.filter(a => a._id.includes(this.props.match.params.kolegij_id));
        if(ress.length > 0){
            this.setState({
                subjectAlreadyInFavorites: true
            })
        }else{
            this.setState({
                subjectAlreadyInFavorites: false
            })
        }
        this.setState({
            loading:false
        })
    }

    setQuery(e){
        this.setState({
            query:e
        })
    }

    render() {
        let filteredScripts = this.props.profile.filteredScripts.filter(a => a.title.toLowerCase().includes(this.state.query.toLowerCase()));
        return (
            <div className="kolegij-page">
                <Headroom disableInlineStyles={true}>
                <Navbar/>
                    <div className={classnames('kolegij-second-navbar',{
                        'kolegij-second-navbar-dark' : this.props.auth.theme === "Dark"
                    })}>
                        <div className="test2">
                            <h1 className={classnames('kolegij-second-navbar-title',{
                                'kolegij-second-navbar-title-dark' : this.props.auth.theme === "Dark"
                            })}>{this.state.loading ? <div className="aaa"/> : this.props.profile.currentSubject.name}</h1>
                        </div>
                    <div className="kolegij-second-navbar-search">
                        <input className={classnames('kolegij-second-navbar-search-input',{
                            'kolegij-second-navbar-search-input-dark' : this.props.auth.theme === "Dark"
                        })} type="text" placeholder="Traži skriptu..."
                                onChange={(event) => {
                                    this.setQuery(event.target.value);
                                }}
                        />
                        <div className="kolegij-content-buttons-container">
                            {this.state.loading || this.state.subjectAlreadyInFavorites && !this.props.profile.favoritesLoading ?
                                <button className="remove-favorites-skripta-button" disabled={this.state.loading} onClick={this.removeSubject}>Izbrisi iz Omiljenih</button>
                                :
                                <button className="favorites-skripta-button" disabled={this.props.profile.favoritesLoading} onClick={this.addToFavorites}>Dodaj u Omlijene</button>}
                            {this.state.loading ?
                                <div className="upload-skripta-button-container loading-disabled-placeholder">
                                    <div className="upload-skripta-button">
                                        <p id="txt">Upload</p>
                                        <div className="mask3"/>
                                    </div>
                                </div>
                                :
                                <div onClick={this.toggleModal} className="upload-skripta-button-container">
                                    <div className="upload-skripta-button">
                                        <p id="txt">Upload</p>
                                        <div className="mask3"/>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                </Headroom>
                <div className="skripte-container">
                    {this.state.loading ? <Spinner/>
                        : filteredScripts.map((item) =>
                            <SkriptaCard keyprop={item._id} key={item._id} title={item.title} date={item.date} username={item.user} description={item.description} />
                        )}
                </div>
                {this.state.modalIsOpen === true ?
                    <UploadModal modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});


export default withRouter(connect(mapStateToProps, {getSubjectById,getAllScripts,filtered2,clearScripts,addSubjectToFavorites,removeSubjectFromFavorites})(KolegijContent))
