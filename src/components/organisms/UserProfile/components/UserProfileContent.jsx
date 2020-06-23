import React, { Component } from 'react'
import UserNameLink from './UserNameLink';
import ActionButtons from './ActionButtons';
import UserProfileContentInfo from './UserProfileContentInfo';

export default class UserProfileContent extends Component {
    render () {
        return (
            <div className="kt-widget__content">
                <div className="kt-widget__head">
                    <UserNameLink />
                    <ActionButtons />
                </div>

                {/* <UserProfileContentSubhead /> */}
                <UserProfileContentInfo />
            </div>
        )
    }
}