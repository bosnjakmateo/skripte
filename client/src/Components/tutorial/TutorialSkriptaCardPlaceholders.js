import React, { Component } from 'react';
import '../../App.css';

class TutorialSkriptaCardPlaceholders extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-1">
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">Skripta za Matematiku</h1>
                        <p className="favorite-kolegij-card-date">19.01.2019</p>
                        <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Morbi et sem erat. Donec at
                            elit id erat.
                        </p>
                    </div>
                </div>
                <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-2">
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">Skripta za Programiranje</h1>
                        <p className="favorite-kolegij-card-date">19.01.2019</p>
                        <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Morbi et sem erat. Donec at
                            elit id erat.
                        </p>
                    </div>
                </div>
                <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-3">
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">Skripta za Strukture podataka i algoritmi</h1>
                        <p className="favorite-kolegij-card-date">19.01.2019</p>
                        <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Morbi et sem erat. Donec at
                            elit id erat.
                        </p>
                    </div>
                </div>
                <div className="tutorial-favorite-kolegiji-card tutorial-skripta-card-4">
                    <div className="favorite-kolegij-card-content">
                        <h1 className="favorite-kolegij-card-title">Skripta za Fiziku</h1>
                        <p className="favorite-kolegij-card-date">19.01.2019</p>
                        <p className="favorite-kolegij-card-description">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Morbi et sem erat. Donec at
                            elit id erat.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorialSkriptaCardPlaceholders;
