import React, { Component } from 'react';
import '../App.css';

class SkriptaPdf extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pdf-container">
                <embed id="asd" src="http://www.pdf995.com/samples/pdf.pdf#view=FitH"/>
            </div>
        );
    }
}

export default SkriptaPdf;
