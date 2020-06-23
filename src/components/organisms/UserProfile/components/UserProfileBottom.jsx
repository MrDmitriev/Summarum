import React, { Component } from 'react'

export default class UserProfileBottom extends Component {
    render() {
        return (
            <div className="kt-widget__bottom">
                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-piggy-bank"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">Experience</span>
                        <span className="kt-widget__value"><span>from 8/2018</span></span>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-confetti"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">Current position</span>
                        <span className="kt-widget__value"><span>React developer</span></span>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-pie-chart"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">Contract ends</span>
                        <span className="kt-widget__value"><span>04/2020</span></span>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-pie-chart"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">Location</span>
                        <span className="kt-widget__value"><span>Prague, Czechia</span></span>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-file-2"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">Portfolio</span>
                        <a href="davra.cz" className="kt-widget__value kt-font-brand">View</a>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-chat-1"></i>
                    </div>
                    <div className="kt-widget__details">
                        <span className="kt-widget__title">648 Comments</span>
                        <a href="davra.cz" className="kt-widget__value kt-font-brand">View</a>
                    </div>
                </div>

                <div className="kt-widget__item">
                    <div className="kt-widget__icon">
                        <i className="flaticon-network"></i>
                    </div>
                </div>
            </div>
        )
    }
}