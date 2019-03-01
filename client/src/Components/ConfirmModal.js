import React, { Component } from 'react';
import '../App.css';
import {deleteScript} from "../Actions/profileActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";

class ConfirmModal extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.confirmScriptDelete = this.confirmScriptDelete.bind(this);
        this.closeConfirmModal = this.closeConfirmModal.bind(this);
        this.prevent = this.prevent.bind(this);
    }

    confirmScriptDelete(){
        this.props.deleteScript(this.props.scriptId);
        this.closeConfirmModal()
    }

    closeConfirmModal(){
        this.props.toggleConfirmModal();
    }

    prevent(e){
        e.stopPropagation();
    }

    render() {
        return (
            <div onClick={this.closeConfirmModal}
                 className={classnames('confirm-container',{
                'confirm-container-dark' : this.props.auth.theme === "Dark"
            })}>
                <div onClick={((e) => this.prevent(e))} className="confirm-modal">
                    <h1 className="confirm-title">Jesi li siguran da zelis izbrisat Skriptu: <span className="script-title-to-delete">{this.props.scriptTitle}</span></h1>
                    <div className="confirm-buttons">
                        <button onClick={this.confirmScriptDelete} className="yes-button">Da</button>
                        <button onClick={this.closeConfirmModal} className="no-button">Ne</button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});


export default withRouter(connect(mapStateToProps, {deleteScript})(ConfirmModal))
