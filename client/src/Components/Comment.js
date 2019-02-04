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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile,
    auth:state.auth,
});

export default withRouter(connect(mapStateToProps, {})(Comment))

