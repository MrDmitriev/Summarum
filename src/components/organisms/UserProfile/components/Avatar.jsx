import React, { Component } from 'react'
import avatar_sergey_100_100 from '../../../assets/img/avatars/avatar_sergey_100_100.jpg';

export default class Avatar extends Component {
    render () {
        return (
            <div className="kt-widget__media kt-hidden-">
                <img src={avatar_sergey_100_100} alt=""  />
            </div>
        )
    }
}