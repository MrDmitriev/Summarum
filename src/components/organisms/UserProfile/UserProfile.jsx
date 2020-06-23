import React, { Component } from 'react'
import UserProfileTop from './components/UserProfileTop';
import UserProfileBottom from './components/UserProfileBottom';

export default class UserProfile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-12">
                 {/* <!--begin:: Widgets/Applications/User/Profile3--> */}
                    <div className="kt-portlet kt-portlet--height-fluid">
                        <div className="kt-portlet__body">
                            <div className="kt-widget kt-widget--user-profile-3">
                                <UserProfileTop />
                                <UserProfileBottom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
