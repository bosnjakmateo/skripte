import React, { Component } from 'react';
import '../App.css';
import classnames from "classnames";
import InstitutionLocation from "./InstitutionLocation";

class InstitutionType extends Component {
    constructor(props){
        super(props);
        this.state = {
            universityOpen: false,
            collageOpen: false,
            mounted: false
        };

        this.toggleUniversityContent = this.toggleUniversityContent.bind(this);
        this.toggleCollageContent = this.toggleCollageContent.bind(this);

    }

    componentDidMount() {
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
                    <h1 onClick={this.toggleUniversityContent} className="institution-type-title">SVEUČILIŠTE<span className="institution-count"> (8)</span></h1>
                    <div className={classnames('institution-type-content-container',{
                        'institution-type-container-open' : this.state.universityOpen
                    })}
                    >
                        <div className={classnames('institution-type-content make-invisible',{
                            'make-visible' :  this.state.universityOpen
                        })}
                        >
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                        </div>
                    </div>
                </div>
                <div className="institution-type-container">
                    <h1 onClick={this.toggleCollageContent} className="institution-type-title">VELEUČILIŠTE<span className="institution-count"> (4)</span></h1>
                    <div className={classnames('institution-type-content-container',{
                        'institution-type-container-open' : this.state.collageOpen
                    })}
                    >
                        <div className={classnames('institution-type-content make-invisible',{
                            'make-visible' :  this.state.collageOpen
                        })}
                        >
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                            <InstitutionLocation/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default InstitutionType;
