import React, { Component } from 'react';
import '../App.css';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import FieldsSubjects from "./FieldsSubjects";
import {getAllSubjects} from "../Actions/profileActions";
import {filterInstitutionSubjects} from "../Actions/institutionsActions";
import classnames from "classnames";
import Spinner from "./Spinner";

class Fields extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            query:""
        };
        this.filterSubjects = this.filterSubjects.bind(this);
        this.setQuery = this.setQuery.bind(this);
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

    setQuery(e){
        this.setState({
            query:e
        })
    }

    render() {
        let filteredSubjects = this.props.institutions.filteredInstitutionSubjects.filter(a => a.name.toLowerCase().includes(this.state.query.toLowerCase()));
        return (
            <div>
                <Navbar/>
               <div className="field-page">
                   <input type="text" placeholder="Traži kolegij..."
                           onChange={(event) => {
                               this.setQuery(event.target.value);
                           }}
                          className={classnames('search-subject-fields',{
                              'search-subject-fields-dark' : this.props.auth.theme === "Dark"
                          })}/>
                   {this.props.institutions.loading || this.props.auth.loading ? <Spinner/>
                       : filteredSubjects.map((item) =>
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
