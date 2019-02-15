import React, { Component } from 'react';
import '../../App.css';

class TutorialKolegijCardPlaceholders extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="tutorial-kolegij-card tutorial-card-1">
                    <h1 className="kolegij-card-title">Programiranje</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-2">
                    <h1 className="kolegij-card-title">Strukture Podataka i Algoritmi</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-3">
                    <h1 className="kolegij-card-title">Matematika</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-4">
                    <h1 className="kolegij-card-title">Modeliranje i Simulacija</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-5">
                    <h1 className="kolegij-card-title">Baze Podataka I</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-6">
                    <h1 className="kolegij-card-title">Engleski Jezik</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-7">
                    <h1 className="kolegij-card-title">Ekonomija za Informatičare</h1>
                </div>
                <div className="tutorial-kolegij-card tutorial-card-8">
                    <h1 className="kolegij-card-title">Tjelesni</h1>
                </div>
            </div>
        );
    }
}

export default TutorialKolegijCardPlaceholders;
