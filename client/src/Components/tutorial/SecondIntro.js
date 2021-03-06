import React, { Component } from 'react';
import '../../App.css';

class SecondIntro extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="left-intro">
                <div className="left-intro-content-container">
                    <div className="left-intro-content">
                        <h2>Omiljene Skripte</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem erat. Donec at
                            elit
                            id erat feugiat malesuada et in ex. Donec consectetur felis arcu, vitae facilisis
                            ante sollicitudin sit amet
                        </p>
                        <p>- Lorem ipsum dolor sit amet</p>
                        <p>- consectetur adipiscing elit</p>
                        <p>- Donec consectetur felis arcu, vitae facilisis</p>
                        <p>- ante sollicitudin sit amet</p>
                        <button onClick={this.props.completeSecondPart} className="left-continue-button">Nastavi<span className="button-arrow">➤</span></button>
                    </div>
                    <p onClick={this.props.skipTutorial} className="left-skip-tutorial">Skip tutorial</p>
                </div>
            </div>
        );
    }
}

export default SecondIntro;
