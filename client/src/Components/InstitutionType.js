import React, { Component } from 'react';
import '../App.css';
import classnames from "classnames";
import InstitutionLocation from "./InstitutionLocation";
import {getUniversities} from "../Actions/institutionsActions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Spinner from "./Spinner";

class InstitutionType extends Component {
    constructor(props){
        super(props);
        this.state = {
            universityOpen: false,
            collageOpen: false,
            mounted: false,
            universityCount:""
        };

        this.toggleUniversityContent = this.toggleUniversityContent.bind(this);
        this.toggleCollageContent = this.toggleCollageContent.bind(this);

    }

    componentDidMount() {
        this.props.getUniversities();
        this.setState({
            mounted: true
        })
    }


    toggleUniversityContent() {
        this.setState({
            universityOpen: !this.state.universityOpen,
            collageOpen: false
        });
    }

    toggleCollageContent() {
        this.setState({
            collageOpen: !this.state.collageOpen,
            universityOpen : false
        });
    }


    render() {
        return (
            <div className={classnames('institution-type',{
                'button-fade-in' : this.state.mounted
            })}>
                <div className="institution-type-container">
                    <h1 onClick={this.toggleUniversityContent} className="institution-type-title">SVEUČILIŠTE
                        <span className="institution-count"> ({!this.props.profile.loading ? this.props.institutions.universities.length : null})</span>
                    </h1>
                    <div className={classnames('institution-type-content-container',{
                        'institution-type-container-open' : this.state.universityOpen
                    })}
                    >
                        <div className={classnames('institution-type-content make-invisible',{
                            'make-visible' :  this.state.universityOpen
                        })}>
                            {this.props.profile.loading ? <Spinner/> :
                                this.props.institutions.universities.map((item) => {
                                   return <InstitutionLocation key={item._id} keyprop={item._id} name={item.name}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="institution-type-container">
                    <h1 onClick={this.toggleCollageContent} className="institution-type-title">VELEUČILIŠTE<span className="institution-count"> (0)</span></h1>
                    <div className={classnames('institution-type-content-container',{
                        'institution-type-container-open' : this.state.collageOpen
                    })}
                    >
                        <div className={classnames('institution-type-content make-invisible',{
                            'make-visible' :  this.state.collageOpen
                        })}>

                        </div>
                    </div>
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

export default withRouter(connect(mapStateToProps, {getUniversities})(InstitutionType))
