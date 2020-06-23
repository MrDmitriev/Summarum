import React, { Component } from 'react';

export default class MenuWraper extends Component {
    render() {
        return (
            <ul className="vcard-nav">
                {this.props.children}
            </ul>
        );
    }
}