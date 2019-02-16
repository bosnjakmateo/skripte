import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import InstitutionField from "./InstitutionField";
import {getInstitutionById,getAllInstitutionFields,filterFields} from "../Actions/institutionsActions";
import classnames from "classnames";

class InstitutionFields extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.filterInstitutionFields = this.filterInstitutionFields.bind(this);
    }


    componentDidMount() {
        this.props.getAllInstitutionFields();
    }

    componentDidUpdate(prevProps) {
        if (this.props.institutions.fieldsFetched !== prevProps.institutions.fieldsFetched ) {
            this.props.getInstitutionById(this.props.match.params.institucija_id)
        }
        if (this.props.institutions.universityFetched !== prevProps.institutions.universityFetched ) {
            this.filterInstitutionFields();
        }
    }


    filterInstitutionFields(){
        let res = this.props.institutions.institutionFields.filter(a => a._university.includes(this.props.institutions.university._id));
        this.props.filterFields(res);
    }

    render() {
        return (
            <div>
                <Navbar/>
                    <div className="institution-fields-page">
                        <h2 className={classnames('institution-fields-title',{
                            'institution-fields-title-dark' : this.props.auth.theme === "Dark"
                        })}>{this.props.institutions.university.name}</h2>
                        {this.props.auth.loading ? null
                            : this.props.institutions.filteredFields.map((item) =>
                                <InstitutionField keyprop={item._id} key={item._id} name={item.name}/>
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

export default withRouter(connect(mapStateToProps, {getInstitutionById,getAllInstitutionFields,filterFields})(InstitutionFields))
