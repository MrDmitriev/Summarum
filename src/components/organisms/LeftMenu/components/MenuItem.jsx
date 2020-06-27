import React from 'react';
import {MenuTypes} from 'features/leftMenu/constants';

export const MenuItem = ({item}) => {
  switch (item.type) {
    case MenuTypes.MAIN:
      return (
        <li className="menu-item" aria-haspopup="true">
          <a href="index.html" className="menu-link">
            <i className={`menu-icon ${item.icon}`}></i>
            <span className="menu-text">{item.name}</span>
          </a>
        </li>
      );
    case MenuTypes.SECTION:
      return (
        <li className="menu-section">
          <h4 className="menu-text">{item.name}</h4>
          <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
        </li>
      );
    case MenuTypes.SUB:
      return (
        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
          <a href="index.html" className="menu-link menu-toggle">
            <i className="menu-icon flaticon-light"></i>
            <span className="menu-text">{item.name}</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="menu-submenu">
            <i className="menu-arrow"></i>
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">{item.name}</span>
                </span>
              </li>
              <li className="menu-item" aria-haspopup="true">
                <a href="features/miscellaneous/kanban-board.html" className="menu-link">
                  <i className="menu-bullet menu-bullet-dot">
                    <span></span>
                  </i>
                  <span className="menu-text">Kanban Board</span>
                </a>
              </li>
              <li className="menu-item" aria-haspopup="true">
                <a href="features/miscellaneous/sticky-panels.html" className="menu-link">
                  <i className="menu-bullet menu-bullet-dot">
                    <span></span>
                  </i>
                  <span className="menu-text">Sticky Panels</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      );
    default:
      return (
        <li className="menu-item" aria-haspopup="true">
          <a href="index.html" className="menu-link">
            <i className="menu-icon flaticon-home"></i>
            <span className="menu-text">Menu not found</span>
          </a>
        </li>
      );
  }
};

export default MenuItem;
