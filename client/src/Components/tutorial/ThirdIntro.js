import React, { Component } from 'react';
import '../../App.css';

class ThirdIntro extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="third-intro">
                <div className="third-intro-content-container">
                    <div className="third-intro-content">
                        <h2>third intro</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem erat.
                            Donec at
                            elit
                            id erat feugiat malesuada et in ex. Donec consectetur felis arcu, vitae
                            facilisis
                            ante sollicitudin sit amet
                        </p>
                        <button onClick={this.props.completeThirdPart}
                                className="third-continue-button">Završi
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdIntro;
