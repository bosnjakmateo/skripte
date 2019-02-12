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
            text: ""
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
        this.props.postComment(this.props.profile.currentScript._id,this.state.text)
        this.setState({
            text:""
        })
    }


    toggleComments () {
        this.setState({ commentsToggled: !this.state.commentsToggled });
    }

    toggleCommentsMobile () {
        this.setState({ commentsToggledMobile: !this.state.commentsToggledMobile });
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.currentScript !== prevProps.profile.currentScript  ) {
            this.setState({
                loaded:true,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.profile.comments !== this.props.profile.comments ) {
            this.props.getScriptById(this.props.match.params.skripta_id)
        }
    }


    render() {
        return (
            <div className={classnames('skripta-comments ',{
                'toggled-comments' : this.state.commentsToggled,
                'skripta-comments-mobile-toggled' : this.state.commentsToggledMobile,
            })}>
                <div onClick={this.toggleCommentsMobile}  className={classnames('comments-mobile ',{
                    'make-invisible' : this.state.commentsToggledMobile,
                })}>
                    <p className="comments-toggle-button">KOMENTARI</p>
                </div>
                <div className={classnames('skripta-comments-content ',{
                    'make-visible' : this.state.commentsToggledMobile,
                })}>
                    <div>
                    <h1 className="skripta-comments-content-title">Komentari <span>({this.state.loaded ? this.props.profile.currentScript.comments.length : null})</span></h1>
                        {this.state.commentsToggled ?
                            <img src={minimize} className="toggle-comments-button" onClick={this.toggleComments}/>
                            :
                            <img src={enlarge} className="toggle-comments-button" onClick={this.toggleComments}/>
                        }
                        <img alt="asdasd" src={close} className="mobile-close-comments-button" onClick={this.toggleCommentsMobile} />
                    </div>
                    {this.state.loaded ? this.props.profile.currentScript.comments.map((comment) => {
                       return <Comment key={comment._id} user={comment.user} text={comment.text} date={comment.date}/>
                    }):null}
                    <form onSubmit={this.onSubmit}>
                        <label>
                            <textarea onChange={this.onChange} name="text" value={this.state.text} placeholder="Komentiraj..." className="comment-form" />
                        </label>
                        < br/>
                        <input className="post-comment" type="submit" value="Komentiraj" />
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

