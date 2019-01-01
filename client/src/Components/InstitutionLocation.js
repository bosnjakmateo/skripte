import React, { Component } from 'react';
import '../App.css';

class InstitutionLocation extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="institution-location">
                <p className="institution-location-title">Sveučilište u Puli</p>
            </div>

        );
    }
}

export default InstitutionLocation;
