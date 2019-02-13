import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {deleteComment, getScriptById} from "../Actions/profileActions";
import Moment from "react-moment";


class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            postDeleted:false
        };

        this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }


    componentDidUpdate(prevProps, nextState, snapshot) {
        if (this.state.postDeleted !== nextState.postDeleted ) {
            this.props.getScriptById(this.props.match.params.skripta_id)
            this.setState({
                postDeleted:false
            })
        }
    }


    handleCommentDelete(){
        this.props.deleteComment(this.props.profile.currentScript._id,this.props.keyprop);
        this.setState({
            postDeleted:true
        })
    }


    render() {
        let timestamp = Date.parse(this.props.date);

        return (
            <div className="comment">
                <p><span className="bolded">{this.props.user + ": "}</span>{this.props.text}</p>
                <div className="under-comment">
                    <span className="comment-options"><Moment format="DD.MM.YYYY HH:mm">{timestamp}</Moment></span>
                    {this.props.auth.userData.username === this.props.user ?<span onClick={this.handleCommentDelete} className="comment-options delete-comment">izbrisi</span> :null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {deleteComment,getScriptById})(Comment))

