import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="kt-header__topbar-item kt-header__topbar-item--user">
                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                    <div className="kt-header__topbar-user">
                        <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                        <span className="kt-header__topbar-username kt-hidden-mobile">Sean</span>
                        <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />

                        {/* <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) --> */}
                        <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">S</span>
                    </div>
                </div>
                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">

                    {/* <!--begin: Head --> */}
                    <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" >
                        <div className="kt-user-card__avatar">
                            <img className="kt-hidden" alt="Pic" src="./assets/media/users/300_25.jpg" />

                            {/* <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) --> */}
                            <span className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
                        </div>
                        <div className="kt-user-card__name">
                            Sean Stone
                        </div>
                        <div className="kt-user-card__badge">
                            <span className="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}