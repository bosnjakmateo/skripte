import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class FieldsSubjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };

    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    render() {
        return (
            <div className="field-item">
                <Link to={`/kolegij/`+this.props.keyprop}>
                    <p>{this.props.name}</p>
                </Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth:state.auth,
    profile:state.profile,
    institutions:state.institutions
});

export default withRouter(connect(mapStateToProps, {})(FieldsSubjects))
