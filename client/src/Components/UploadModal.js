import React, { Component } from 'react';
import '../App.css';

class UploadModal extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="upload-modal-container">
                <div  className="upload-modal">
                    <div className="upload-modal-content">
                        <h1 className="upload-skripta-title">OBJAVI SKRIPTU ZA KOLEGIJ: STRUKTURA PODATAKA I ALGORITMI</h1>
                        <form>
                            <div className="upload-skripta-component">
                                <input type="text" placeholder="Naslov..."/>
                            </div>
                            <div className="upload-skripta-component">
                                <textarea className="textarea" placeholder="Kratak opis..." rows="4" />
                            </div>
                            <div className="upload-skripta-component">
                                <input type="file"/>
                            </div>
                            <div className="upload-skripta-component">
                                <button>OBJAVI</button>
                            </div>
                        </form>
                    </div>
                    <button onClick={this.props.toggleModal}>close modal</button>
                </div>
            </div>
        );
    }
}

export default UploadModal;
