/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';
import MenuItems from 'features/leftMenu/constants';
import MenuItem from './components/MenuItem';

export default class LeftMenu extends Component {
  render() {
    return (
			<>
			<div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
			  {/* <!--begin::Menu Nav--> */}
			  <ul className="menu-nav">
			    {MenuItems.map((item) => <MenuItem key={item.name} item={item} />)}
			  </ul>
			  {/* <!--end::Menu Nav--> */}
			</div>
			</>
    );
  }
}
