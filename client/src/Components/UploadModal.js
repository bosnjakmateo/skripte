import React, { Component } from 'react';
import '../App.css';
import uploadIcon from "../Images/selectScript.svg";
import uploadIconDark from "../Images/selectScriptDark.svg";
import {connect} from "react-redux";
import {postScript} from "../Actions/profileActions";
import {getCurrentUser} from "../Actions/authActions";
import classnames from "classnames";

class UploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:"",
            file:{},
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.prevent = this.prevent.bind(this);
        this.getScript = this.getScript.bind(this);
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', this.state.title)
        formData.append('_subject', this.props.profile.currentSubject._id)
        formData.append('description', this.state.description)
        formData.append('pdf', this.uploadInput.files[0],this.uploadInput.name)

        this.props.postScript(formData);
    }


    prevent(e){
        e.stopPropagation();
    }

    getScript(e){
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <div onClick={this.props.toggleModal} className="upload-modal-container">
                <div onClick={((e) => this.prevent(e))}
                    className={classnames('upload-modal',{
                    'upload-modal-dark' : this.props.auth.theme === "Dark"
                })}>
                    <h1 className="upload-skripta-title">OBJAVI SKRIPTU ZA KOLEGIJ: {this.props.profile.currentSubject.name}</h1>
                    <div className="upload-modal-content">
                        <form encType="multipart/form-data" onSubmit={this.onSubmit}>
                            <div className="upload-skripta-component">
                                <label>Naslov :</label>
                                <input
                                    className="upload-skripta-input"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                                <br/>
                                <span className="upload-modal-error">{this.props.profile.errors.data ? this.props.profile.errors.data.title : null }</span>
                            </div>
                            <div className="upload-skripta-component">
                                <label>Kratak opis :</label>
                                <textarea
                                    className="textarea"
                                    rows="4"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    maxLength="94"
                                />
                                <br/>
                                <span className="upload-modal-error">{this.props.profile.errors.data ? this.props.profile.errors.data.description : null }</span>
                            </div>
                            <div className="upload-skripta-component file-container">
                                <input id="file" className="inputfile" ref={(ref) => { this.uploadInput = ref; }} type="file"  name="pdf" onChange={this.getScript}/>
                                <label id="file-select-label" htmlFor="file"
                                       className={classnames('',{
                                        'make-green' : this.state.file.name
                                })}>
                                    {
                                        this.props.auth.theme === "Dark" ?
                                            <img id="file-select" src={uploadIconDark} alt="upload script" title="upload script"/>
                                            :
                                            <img id="file-select" src={uploadIcon} alt="upload script" title="upload script"/>
                                    }
                                    {!this.state.file.name ? "Choose a file..." : this.state.file.name}
                                </label>
                                <span className="upload-modal-error">{this.props.profile.errors.data ? this.props.profile.errors.data.message : null }</span>
                            </div>
                            <div className="upload-skripta-component upload-button-conatiner">
                                <button type="submit" disabled={!this.state.file.name} className={classnames('',{
                                    'upload-button-dark' : this.props.auth.theme === "Dark"
                                })}>Upload</button>
                            </div>
                        </form>
                    </div>
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

export default connect(mapStateToProps, { postScript,getCurrentUser })(UploadModal);
