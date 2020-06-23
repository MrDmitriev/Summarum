import React, { Component } from 'react'

export default class DropDownMenuItem extends Component {
    render() {
        const { label } = this.props;
        return (
            <li className="kt-nav__item">
                <a href="davra.cz" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                    <span className="kt-nav__link-text">{label}</span>
                </a>
            </li>
        );
    }
}