import React, { Component } from 'react'
import DropDownMenuItem from './DropDownMenuItem';

export default class DropDownMenu extends Component {
    render() {
        return (
            <div className="dropdown-menu dropdown-menu-right">
                <ul className="kt-nav">
                    <DropDownMenuItem label={'Messages'} />
                </ul>
            </div>
        );
    }
}
