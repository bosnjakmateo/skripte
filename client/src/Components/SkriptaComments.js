import React, { Component } from 'react';
import '../App.css';
import classnames from 'classnames';
import close from "../Images/close.svg";
import minimize from "../Images/minimize.svg";
import enlarge from "../Images/enlarge.svg"
import Comment from "./Comment";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {postComment,getScriptById} from "../Actions/profileActions";

class SkriptaComments extends Component {
    constructor(props){
        super(props);
        this.state={
            commentsToggled: false,
            commentsToggledMobile: false,
            loaded: false,
            commentsNumber: "",
            text: "",
            postPosted:false
        };

        this.toggleComments = this.toggleComments.bind(this);
        this.toggleCommentsMobile = this.toggleCommentsMobile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.text !== "") {
            this.props.postComment(this.props.profile.currentScript._id, this.state.text,this.props.match.params.skripta_id);
            this.setState({
                text: "",
                postPosted:true
            })
        }
    }


    toggleComments () {
        this.setState({ commentsToggled: !this.state.commentsToggled });
    }

    toggleCommentsMobile () {
        this.setState({ commentsToggledMobile: !this.state.commentsToggledMobile });
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.currentScript !== prevProps.profile.currentScript) {
            this.setState({
                loaded:true
            })
        }

    }

    render() {
        return (
            <div className={classnames('skripta-comments ',{
                'toggled-comments' : this.state.commentsToggled,
                'skripta-comments-mobile-toggled' : this.state.commentsToggledMobile,
                'skripta-comments-dark' : this.props.auth.theme === "Dark"
            })}>
                <div onClick={this.toggleCommentsMobile}  className={classnames('comments-mobile ',{
                    'make-invisible' : this.state.commentsToggledMobile,
                })}>
                    <p className={classnames('comments-toggle-button',{
                        'comments-toggle-button-dark' : this.props.auth.theme === "Dark"
                    })}>
                        DETALJI</p>
                </div>
                <div className={classnames('skripta-comments-content ',{
                    'make-visible' : this.state.commentsToggledMobile,
                    'skripta-comments-content-dark' : this.props.auth.theme === "Dark"
                })}>
                    <div>
                    <h1 className="skripta-comments-content-title">Komentari <span>({this.state.loaded ? this.props.profile.currentScript.comments.length : null})</span></h1>
                        {this.state.commentsToggled ?
                            <img src={minimize} alt="minimize" className="toggle-comments-button" onClick={this.toggleComments}/>
                            :
                            <img src={enlarge} alt="enlarge" className="toggle-comments-button" onClick={this.toggleComments}/>
                        }
                        <img alt="asdasd" src={close} className="mobile-close-comments-button" onClick={this.toggleCommentsMobile} />
                    </div>
                    {this.state.loaded ? this.props.profile.comments.map((comment) => {
                       return <Comment keyprop={comment._id} key={comment._id} user={comment.user} text={comment.text} date={comment.date}/>
                    }):null}
                    <form className="comment-textarea" onSubmit={this.onSubmit}>
                        <label>
                            <textarea onChange={this.onChange} name="text" value={this.state.text} placeholder="Komentiraj..." className="comment-form" minLength="2" maxLength="300"/>
                        </label>
                        < br/>
                        <input disabled={!this.state.text} type="submit" value="Komentiraj" className={classnames('post-comment',{
                            'post-comment-dark' : this.props.auth.theme === "Dark"
                        })}/>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {postComment,getScriptById})(SkriptaComments))

