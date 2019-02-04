import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class InstitutionLocation extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Link to={`/institucije/`+this.props.keyprop}>
                <div className="institution-location">
                    <p className="institution-location-title">{this.props.name}</p>
                </div>
            </Link>

        );
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth,
    profile:state.profile
});

export default withRouter(connect(mapStateToProps, {})(InstitutionLocation ))
