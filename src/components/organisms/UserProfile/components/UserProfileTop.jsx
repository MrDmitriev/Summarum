import React, { Component } from 'react'
import Avatar from './Avatar';
import UserProfileContent from './UserProfileContent';

export default class UserProfileTop extends Component {
    render() {
        return (
            <div className="kt-widget__top">
                <Avatar />
                <UserProfileContent />
            </div>
        );
    }
}