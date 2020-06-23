import React, { Component } from 'react'

export default class RectangleInfo extends Component {
    render() {
        return (
            <div className="vcard-page-content-wrapper d-flex align-items-end">
                <div className="page-content">
                    <div className="hero-area horizontal clearfix">
                        <div className="hero-content">
                            <h5>Hello I’m</h5>
                            <h2>Sergey Dmitriev</h2>
                            <h3>Front-End / JavaScript / React Developer</h3>

                            <div className="contact-info mt-30">
                                <a href="davra.cz"><img src="img/core-img/envelope2.png" alt="" /> sergey.dmitriev@davra.cz</a>
                                <a href="davra.cz"><img src="img/core-img/phone-call2.png" alt="" /> +420 773 962 984</a>
                                <a href="https://www.linkedin.com/in/mrdmitriev/"><img src="img/core-img/envelope2.png" alt="" />Prague, Czech Republic</a>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}