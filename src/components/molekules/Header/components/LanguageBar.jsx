import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
                    <span className="kt-header__topbar-icon">
                        <img className="" src="./assets/media/flags/020-flag.svg" alt="" />
                    </span>
                </div>
                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
                    <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
                        <li className="kt-nav__item kt-nav__item--active">
                            <a href="davra.cz" className="kt-nav__link">
                                <span className="kt-nav__link-icon"><img src="./assets/media/flags/020-flag.svg" alt="" /></span>
                                <span className="kt-nav__link-text">English</span>
                            </a>
                        </li>
                        <li className="kt-nav__item">
                            <a href="davra.cz" className="kt-nav__link">
                                <span className="kt-nav__link-icon"><img src="./assets/media/flags/016-spain.svg" alt="" /></span>
                                <span className="kt-nav__link-text">Spanish</span>
                            </a>
                        </li>
                        <li className="kt-nav__item">
                            <a href="davra.cz" className="kt-nav__link">
                                <span className="kt-nav__link-icon"><img src="./assets/media/flags/017-germany.svg" alt="" /></span>
                                <span className="kt-nav__link-text">German</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}