import React, {Component} from 'react';
import HeaderMenu from './components/HeaderMenu';
import HeaderTopbar from './components/HeaderTopbar';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed ">
          <HeaderMenu />
          <HeaderTopbar />
        </div>
      </div>
    );
  }
}
