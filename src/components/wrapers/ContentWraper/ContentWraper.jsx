import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">					
				{this.props.children}
			</div>
        );
    }
}