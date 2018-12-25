import React, { Component } from 'react';
import '../App.css';

class InstitutionType extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="institution-type">
                <h1 className="institution-type-title">SVEUČILIŠTE<span className="institution-count"> (8)</span></h1>
            </div>

        );
    }
}

export default InstitutionType;
