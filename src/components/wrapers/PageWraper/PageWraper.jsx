import React, { Component } from 'react'

export default class PageWraper extends Component {
    render() {
        return (
            <div className="kt-grid kt-grid--hor kt-grid--root">
                <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                    {this.props.children}
                </div>
            </div>
        );
    }
}