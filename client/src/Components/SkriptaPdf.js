import React, { Component } from 'react';
import '../App.css';
import { Document, Page } from 'react-pdf';


class SkriptaPdf extends Component {
    constructor(props){
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        };
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div className="pdf-container">
                <Document
                    file="somefile.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export default SkriptaPdf;
