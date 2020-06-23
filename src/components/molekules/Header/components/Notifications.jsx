import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="kt-header__topbar-item dropdown">
                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px" aria-expanded="true">
                    <span className="kt-header__topbar-icon kt-pulse kt-pulse--brand">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24" />
                                <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" id="Combined-Shape" fill="#000000" opacity="0.3" />
                                <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" id="Combined-Shape" fill="#000000" />
                            </g>
                        </svg> <span className="kt-pulse__ring"></span>
                    </span>

                
                </div>
                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
                    <form>

                        {/* <!--begin: Head --> */}
                        <div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b" >
                            <h3 className="kt-head__title">
                                User Notifications
                                &nbsp;
                                <span className="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>
                            </h3>
                            <ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-toggle="tab" href="davra.cztopbar_notifications_notifications" role="tab" aria-selected="true">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="davra.cztopbar_notifications_events" role="tab" aria-selected="false">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="davra.cztopbar_notifications_logs" role="tab" aria-selected="false">Logs</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!--end: Head --> */}
                        <div className="tab-content">
                            <div className="tab-pane active show" id="topbar_notifications_notifications" role="tabpanel">
                                
                            </div>
                            <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                
                            </div>
                            <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                <div className="kt-grid kt-grid--ver" >
                                    <div className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                                        <div className="kt-grid__item kt-grid__item--middle kt-align-center">
                                            All caught up!
                                            <br />No new notifications.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}