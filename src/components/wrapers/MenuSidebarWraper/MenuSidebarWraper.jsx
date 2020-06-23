import React, { Component } from 'react'

export default class MenuSidebarWraper extends Component {
    render() {
        return (
            <div className="kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">
                {this.props.children}
            </div>
        );
    }
}