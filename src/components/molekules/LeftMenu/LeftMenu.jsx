import React, { Component } from 'react'
import Menu from './components/Menu';
import Logo from './components/Logo';
import { MenuSidebarWraper } from '../../';

export default  class LeftMenu extends Component {
    render() {
        return (
            <div>
                <button className="kt-aside-close " id="kt_aside_close_btn"><i className="la la-close"></i></button>
				<MenuSidebarWraper>
					<Logo />
                    <Menu />
                </MenuSidebarWraper>
            </div>
        );
    }
}