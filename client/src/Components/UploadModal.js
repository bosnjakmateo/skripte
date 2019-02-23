import React, { Component } from 'react';
import '../App.css';
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
            script:{},
            scriptName:"",
            file:null
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
        formData.append('file',this.uploadInput.files[0]);

        const postData = {
            title: this.state.title,
            description: this.state.description,
            _subject: this.props.profile.currentSubject._id,
            pdf:formData
        };


        this.props.postScript(postData);
        this.props.getCurrentUser();
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
                    <div className="upload-modal-content">
                        <h1 className="upload-skripta-title">OBJAVI SKRIPTU ZA KOLEGIJ: {this.props.profile.currentSubject.name}</h1>
                        <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}>
                            <div className="upload-skripta-component">
                                <input
                                    className="upload-skripta-input"
                                    type="text"
                                    placeholder="Naslov skripte..."
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                                <br/>
                                <span className="upload-modal-error">{this.props.profile.errors.data ? this.props.profile.errors.data.title : null }</span>
                            </div>
                            <div className="upload-skripta-component">
                                <textarea
                                    className="textarea"
                                    placeholder="Kratak opis..."
                                    rows="4"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    maxLength="94"
                                />
                                <br/>
                                <span className="upload-modal-error">{this.props.profile.errors.data ? this.props.profile.errors.data.description : null }</span>
                            </div>
                            <div className="upload-skripta-component">
                                <input ref={(ref) => { this.uploadInput = ref; }}
                                    className="file-upload" type="file" accept=".pdf" id="upload_doc" name="pdf"  onChange={this.getScript}
                                />
                            </div>
                            <div className="upload-skripta-component">
                                <input type='submit' value='Upload' />
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
