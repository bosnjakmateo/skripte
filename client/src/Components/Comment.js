import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }


    render() {
        return (
            <div className="comment">
                <p><span className="bolded">{this.props.user + ": "}</span>{this.props.text}</p>
                <div className="under-comment">
                    <span className="comment-options">{this.props.date}</span>
                    {this.props.auth.userData.username === this.props.user ?<span className="comment-options">izbrisi</span> :null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {})(Comment))

