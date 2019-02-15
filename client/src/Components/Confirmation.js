import React, { Component } from 'react';
import '../App.css';

class Confirmation extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="confirmation-page">
                <div className="confirmation-buttons-container">
                    <h3>
                        Izbrisi
                    </h3>
                    <h3>
                        Strukture podataka i algoritmi
                    </h3>
                    <h3>
                        iz omlijenih?
                    </h3>
                    <div className="confirmation-buttons">
                        <button>CONFIRM</button>
                        <button>DECLINE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirmation;
