import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import FieldsSubjects from "./FieldsSubjects";
import {getAllSubjects} from "../Actions/profileActions";
import {filterInstitutionSubjects} from "../Actions/institutionsActions";

class Fields extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
        this.filterSubjects = this.filterSubjects.bind(this);
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
        this.props.getAllSubjects();
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile.allSubjects !== prevProps.profile.allSubjects  ) {
            this.filterSubjects()
        }
    }

    filterSubjects(){
        let res = this.props.profile.allSubjects.filter(a => a._college.includes(this.props.match.params.smjer_id));
        this.props.filterInstitutionSubjects(res)
    }

    render() {
        return (
            <div>
                <Navbar/>
               <div className="field-page">
                   {this.props.auth.loading ? null
                       : this.props.institutions.filteredInstitutionSubjects.map((item) =>
                           <FieldsSubjects keyprop={item._id} key={item._id} name={item.name}/>
                       )}
               </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth:state.auth,
    profile:state.profile,
    institutions:state.institutions
});

export default withRouter(connect(mapStateToProps, {getAllSubjects,filterInstitutionSubjects})(Fields))
