import React, { Component } from 'react'

export default class DownloadCVButton extends Component {
    render() {
        return (
            <div className="horizontal-contact-btn">
                <a href="davra.cz" className="btn vcard-btn contact-btn"><i className="fa fa-envelope-o"></i><span>Download CV</span></a>
            </div>
        );
    }
}