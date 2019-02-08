import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {postScript} from "../Actions/profileActions";

class UploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const postData = {
            title: this.state.title,
            description: this.state.description,
            _subject: this.props.profile.currentSubject._id
        };
        console.log(postData)
        this.props.postScript(postData);

    }

    render() {
        return (
            <div  className="upload-modal-container">
                <div  className="upload-modal">
                    <div className="upload-modal-content">
                        <h1 className="upload-skripta-title">OBJAVI SKRIPTU ZA KOLEGIJ:</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="upload-skripta-component">
                                <input
                                    type="text"
                                    placeholder="Naslov..."
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="upload-skripta-component">
                                <textarea
                                    className="textarea"
                                    placeholder="Kratak opis..."
                                    rows="4"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </div>
                            {/*<div className="upload-skripta-component">
                                <input type="file"/>
                            </div>
                            */}
                            <div className="upload-skripta-component">
                                <button>OBJAVI</button>
                            </div>
                        </form>
                    </div>
                    <button type="submit" onClick={this.props.toggleModal}>close modal</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile:state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { postScript })(UploadModal);
