import React, { Component } from 'react';
import '../../App.css';
import classnames from "classnames";

class FirstIntro extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="right-intro">
                <div className={classnames('right-intro-content-container',{
                    'slide-in-from-right' : this.props.mounted
                })}>
                    <div className="right-intro-content">
                        <h2>Omiljeni Kolegiji</h2>
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
                        <button onClick={this.props.completeFirstPart} className="right-continue-button">Nastavi<span className="button-arrow">➤</span></button>
                    </div>
                    <p onClick={this.props.skipTutorial} className="right-skip-tutorial">Skip tutorial</p>
                </div>
            </div>
        );
    }
}

export default FirstIntro;
