import React, {Component} from 'react';

import Search from './Search';
import Notifications from './Notifications';
import QuickActions from './QuickActions';
import MyCart from './MyCart';
import QuickPanelToggler from './QuickPanelToggler';
import LanguageBar from './LanguageBar';
import UserBar from './UserBar';

export default class HeaderTopbar extends Component {
  render() {
    return (
      <div className="kt-header__topbar">
        <Search />
        <Notifications />
        <QuickActions />
        <MyCart />
        <QuickPanelToggler />
        <LanguageBar />
        <UserBar />
      </div>
    );
  }
}
