import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import SkriptaCard from "./SkriptaCard";
import Headroom from 'react-headroom';
import UploadModal from "./UploadModal";
import {withRouter} from "react-router-dom";
import {getSubjectById, getAllScripts, filtered2,clearScripts,addSubjectToFavorites} from "../Actions/profileActions";
import {connect} from "react-redux";
import Spinner from "./Spinner";


class KolegijContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            subjectAlreadyInFavorites:false,
            query:""
        };

        this.addToFavorites = this.addToFavorites.bind(this);
        this.asd3 = this.asd3.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
        this.checkIfAlreadyInFavorites = this.checkIfAlreadyInFavorites.bind(this)
        this.setQuery = this.setQuery.bind(this);
    }

    toggleModal(){
        this.setState({
            modalIsOpen:!this.state.modalIsOpen
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.allScripts !== prevProps.profile.allScripts  ) {
            this.checkIfAlreadyInFavorites();
            this.asd3()
        }
    }

    asd3(){
        let res = this.props.profile.allScripts.filter(a => a._subject.includes(this.props.profile.currentSubject._id));
        this.props.filtered2(res)
    }

    componentDidMount(){
        this.props.getSubjectById(this.props.match.params.kolegij_id)
        this.props.getAllScripts()
    }

    componentWillUnmount(){
        this.props.clearScripts();
    }

    addToFavorites(){
        this.props.addSubjectToFavorites(this.props.match.params.kolegij_id)
        this.setState({
            subjectAlreadyInFavorites: true
        })
    }


    checkIfAlreadyInFavorites(){
        let ress = this.props.auth.userData.favoriteSubjects.filter(a => a._subject.includes(this.props.profile.currentSubject._id));
        if(ress.length > 0){
            this.setState({
                subjectAlreadyInFavorites: true
            })
        }else{
            this.setState({
                subjectAlreadyInFavorites: false
            })
        }
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
                <div className="kolegij-second-navbar">
                    <div className="test2">
                        <h1 className="kolegij-second-navbar-title">{this.props.profile.currentSubject.name}</h1>
                        <button disabled={this.state.subjectAlreadyInFavorites} onClick={this.addToFavorites}>Dodaj u Favorite</button>
                    </div>
                    <div className="kolegij-second-navbar-search">
                        <input  className="kolegij-second-navbar-search-input" type="text" placeholder="Traži skriptu..."
                                onChange={(event) => {
                                    this.setQuery(event.target.value);
                                }}
                        />
                        <select
                            className="resours-type-select">
                            <option className="hidden"> Godina: </option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                        </select>
                        <div onClick={this.toggleModal} className="upload-skripta-button-container">
                            <div className="upload-skripta-button">
                                <p id="txt">UPLODAJ</p>
                                <div className="mask3"/>
                            </div>
                        </div>
                    </div>
                </div>
                </Headroom>
                <div className="skripte-container">
                    {this.props.auth.loading ? <Spinner/>
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


export default withRouter(connect(mapStateToProps, {getSubjectById,getAllScripts,filtered2,clearScripts,addSubjectToFavorites})(KolegijContent))
