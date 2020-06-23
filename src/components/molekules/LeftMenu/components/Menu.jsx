import React, { Component } from 'react'
// import MenuWraper from './MenuWraper';
import MenuItem from './MenuItem';
import { menuItems } from './configMenu';

export default class Menu extends Component {
    render() {
        return (
            <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                <div id="kt_aside_menu" className="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                    <ul className="kt-menu__nav ">
                        {menuItems.map((item, i) => {
                            return <MenuItem key={i} label={item} />
                        })}
                        
                    </ul>
                </div>
            </div>
        );
    }
}