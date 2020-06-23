/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';


export default class GeneralAside extends Component {
  render() {
    return (
			<>
				{/* <!--begin::Aside--> */}
				<div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
				  {/* <!--begin::Brand--> */}
				  <div className="brand flex-column-auto" id="kt_brand">
				    {/* <!--begin::Logo--> */}
				    <a href="index.html" className="brand-logo">
				      <img alt="Logo" src="assets/media/logos/logo-light.png" />
				    </a>
				    {/* <!--end::Logo--> */}
				    {/* <!--begin::Toggle--> */}
				    <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
				      <span className="svg-icon svg-icon svg-icon-xl">
				        {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg--> */}
				        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
				          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				            <polygon points="0 0 24 0 24 24 0 24" />
				            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
				            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
				          </g>
				        </svg>
				        {/* <!--end::Svg Icon--> */}
				      </span>
				    </button>
				    {/* <!--end::Toolbar--> */}
				  </div>
				  {/* <!--end::Brand--> */}
				  {/* <!--begin::Aside Menu--> */}
				  <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
				    {/* <!--begin::Menu Container--> */}
				    <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
				      {/* <!--begin::Menu Nav--> */}
				      <ul className="menu-nav">
				        <li className="menu-item" aria-haspopup="true">
				          <a href="index.html" className="menu-link">
				            <i className="menu-icon flaticon-home"></i>
				            <span className="menu-text">Dashboard</span>
				          </a>
				        </li>
				        <li className="menu-section">
				          <h4 className="menu-text">Custom</h4>
				          <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-web"></i>
				            <span className="menu-text">Applications</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Applications</span>
				                </span>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Users</span>
				                  <span className="menu-label">
				                    <span className="label label-rounded label-primary">6</span>
				                  </span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/list-default.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Default</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/list-datatable.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Datatable</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/list-columns-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/list-columns-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/add-user.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Add User</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/user/edit-user.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Edit User</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Profile</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                      <a href="index.html" className="menu-link menu-toggle">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Profile 1</span>
				                        <i className="menu-arrow"></i>
				                      </a>
				                      <div className="menu-submenu">
				                        <i className="menu-arrow"></i>
				                        <ul className="menu-subnav">
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/apps/profile/profile-1/overview.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Overview</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/apps/profile/profile-1/personal-information.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Personal Information</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/apps/profile/profile-1/account-information.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Account Information</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/apps/profile/profile-1/change-password.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Change Password</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/apps/profile/profile-1/email-settings.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Email Settings</span>
				                            </a>
				                          </li>
				                        </ul>
				                      </div>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/profile/profile-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Profile 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/profile/profile-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Profile 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/profile/profile-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Profile 4</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Contacts</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/contacts/list-columns.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/contacts/list-datatable.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Datatable</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/contacts/view-contact.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">View Contact</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/contacts/add-contact.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Add Contact</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/contacts/edit-contact.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Edit Contact</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Projects</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/list-columns-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/list-columns-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/list-columns-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/list-columns-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Columns 4</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/list-datatable.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">List - Datatable</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/view-project.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">View Project</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/add-project.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Add Project</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/projects/edit-project.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Edit Project</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Support Center</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/home-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Home 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/home-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Home 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/faq-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">FAQ 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/faq-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">FAQ 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/faq-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">FAQ 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/feedback.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Feedback</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/support-center/license.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">License</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Chat</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/chat/private.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Private</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/chat/group.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Group</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/chat/popup.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Popup</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Todo</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/todo/tasks.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Tasks</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/todo/docs.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Docs</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/apps/todo/files.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Files</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="custom/apps/inbox.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-line">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Inbox</span>
				                  <span className="menu-label">
				                    <span className="label label-danger label-inline">new</span>
				                  </span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-tabs"></i>
				            <span className="menu-text">Pages</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Pages</span>
				                </span>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Login</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/login/login-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Login 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/login/login-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Login 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/login/login-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Login 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/login/login-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Login 4</span>
				                      </a>
				                    </li>
				                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                      <a href="index.html" className="menu-link menu-toggle">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Login 5</span>
				                        <span className="menu-label">
				                          <span className="label label-inline label-info">Wizard</span>
				                        </span>
				                        <i className="menu-arrow"></i>
				                      </a>
				                      <div className="menu-submenu">
				                        <i className="menu-arrow"></i>
				                        <ul className="menu-subnav">
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/login-5/signup.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Sign Up</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/login-5/signin.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Sign In</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/login-5/forgot.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Forgot Password</span>
				                            </a>
				                          </li>
				                        </ul>
				                      </div>
				                    </li>
				                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                      <a href="index.html" className="menu-link menu-toggle">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">classNameic</span>
				                        <i className="menu-arrow"></i>
				                      </a>
				                      <div className="menu-submenu">
				                        <i className="menu-arrow"></i>
				                        <ul className="menu-subnav">
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/classNameic/login-1.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Login 1</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/classNameic/login-2.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Login 3</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/classNameic/login-3.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Login 4</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="custom/pages/login/classNameic/login-4.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-dot">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">Login 5</span>
				                            </a>
				                          </li>
				                        </ul>
				                      </div>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Wizard</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/wizard/wizard-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Wizard 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/wizard/wizard-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Wizard 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/wizard/wizard-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Wizard 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/wizard/wizard-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Wizard 4</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Pricing Tables</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/pricing/pricing-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Pricing Tables 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/pricing/pricing-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Pricing Tables 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/pricing/pricing-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Pricing Tables 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/pricing/pricing-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Pricing Tables 4</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Invoices</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/invoices/invoice-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Invoice 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/invoices/invoice-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Invoice 2</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Error</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-1.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 1</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-3.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 3</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-4.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 4</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-5.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 5</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="custom/pages/error/error-6.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Error 6</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-section">
				          <h4 className="menu-text">Layout</h4>
				          <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-graphic"></i>
				            <span className="menu-text">Themes</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Themes</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/themes/aside-light.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Light Aside</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/themes/header-dark.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Dark Header</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-layers"></i>
				            <span className="menu-text">Subheaders</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Subheaders</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/subheader/toolbar.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Toolbar Nav</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/subheader/actions.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Actions Buttons</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/subheader/tabbed.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tabbed Nav</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/subheader/classNameic.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">classNameic</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/subheader/none.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">None</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu menu-item-open menu-item-here" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-interface-8"></i>
				            <span className="menu-text">General</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">General</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/general/fluid-content.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Fluid Content</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/general/minimized-aside.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Minimized Aside</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/general/no-aside.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">No Aside</span>
				                </a>
				              </li>
				              <li className="menu-item menu-item-active" aria-haspopup="true">
				                <a href="layout/general/empty-page.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Empty Page</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/general/fixed-footer.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Fixed Footer</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="layout/general/no-header-menu.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">No Header Menu</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item" aria-haspopup="true">
				          <a target="_blank" rel="noreferrer" href="https://keenthemes.com/metronic/preview/demo1/builder.html" className="menu-link">
				            <i className="menu-icon flaticon-cogwheel-1"></i>
				            <span className="menu-text">Builder</span>
				          </a>
				        </li>
				        <li className="menu-section">
				          <h4 className="menu-text">CRUD</h4>
				          <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-interface-7"></i>
				            <span className="menu-text">Forms</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Forms</span>
				                </span>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Form Controls</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/base.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Base Inputs</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/input-group.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Input Groups</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/checkbox.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Checkbox</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/radio.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Radio</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/switch.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Switch</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/controls/option.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Mega Options</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Form Widgets</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-datepicker.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Datepicker</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-datetimepicker.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Datetimepicker</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-timepicker.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Timepicker</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-daterangepicker.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Daterangepicker</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/tagify.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Tagify</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-touchspin.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Touchspin</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-maxlength.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Maxlength</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-switch.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Switch</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-multipleselectsplitter.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Multiple Select Splitter</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/bootstrap-select.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Bootstrap Select</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/select2.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Select2</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/typeahead.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Typeahead</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/nouislider.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">noUiSlider</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/form-repeater.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Form Repeater</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/ion-range-slider.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Ion Range Slider</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/input-mask.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Input Masks</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/autosize.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Autosize</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/clipboard.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Clipboard</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/widgets/recaptcha.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Google reCaptcha</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Form Text Editors</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/editors/tinymce.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">TinyMCE</span>
				                      </a>
				                    </li>
				                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                      <a href="index.html" className="menu-link menu-toggle">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">CKEditor</span>
				                        <i className="menu-arrow"></i>
				                      </a>
				                      <div className="menu-submenu">
				                        <i className="menu-arrow"></i>
				                        <ul className="menu-subnav">
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="crud/forms/editors/ckeditor-classNameic.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">CKEditor classNameic</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="crud/forms/editors/ckeditor-inline.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">CKEditor Inline</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="crud/forms/editors/ckeditor-balloon.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">CKEditor Balloon</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="crud/forms/editors/ckeditor-balloon-block.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">CKEditor Balloon Block</span>
				                            </a>
				                          </li>
				                          <li className="menu-item" aria-haspopup="true">
				                            <a href="crud/forms/editors/ckeditor-document.html" className="menu-link">
				                              <i className="menu-bullet menu-bullet-line">
				                                <span></span>
				                              </i>
				                              <span className="menu-text">CKEditor Document</span>
				                            </a>
				                          </li>
				                        </ul>
				                      </div>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/editors/quill.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Quill Text Editor</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/editors/summernote.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Summernote WYSIWYG</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/editors/bootstrap-markdown.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Markdown Editor</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Form Layouts</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/layouts/default-forms.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Default Forms</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/layouts/multi-column-forms.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Multi Column Forms</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/layouts/action-bars.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Basic Action Bars</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/layouts/sticky-action-bar.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Sticky Action Bar</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Form Validation</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/validation/states.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Validation States</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/validation/form-controls.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Form Controls</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/forms/validation/form-widgets.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Form Widgets</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-tabs"></i>
				            <span className="menu-text">KTDatatable</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">KTDatatable</span>
				                </span>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Base</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/data-local.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Local Data</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/data-json.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">JSON Data</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/data-ajax.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Ajax Data</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/html-table.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">HTML Table</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/local-sort.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Local Sort</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/base/translation.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Translation</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Advanced</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/record-selection.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Record Selection</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/row-details.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Row Details</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/modal.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Modal Examples</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/column-rendering.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Column Rendering</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/column-width.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Column Width</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/advanced/vertical.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Vertical Scrolling</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Child Datatables</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/child/data-local.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Local Data</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/child/data-ajax.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Remote Data</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">API</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/api/methods.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">API Methods</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/ktdatatable/api/events.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Events</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-list-3"></i>
				            <span className="menu-text">Datatables.net</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Datatables.net</span>
				                </span>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Basic</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/basic/basic.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Basic Tables</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/basic/scrollable.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Scrollable Tables</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/basic/headers.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Complex Headers</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/basic/paginations.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Pagination Options</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Advanced</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/column-rendering.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Column Rendering</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/multiple-controls.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Multiple Controls</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/column-visibility.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Column Visibility</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/row-callback.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Row Callback</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/row-grouping.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Row Grouping</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/advanced/footer-callback.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Footer Callback</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Data sources</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/data-sources/html.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">HTML</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/data-sources/javascript.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Javascript</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/data-sources/ajax-client-side.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Ajax Client-side</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/data-sources/ajax-server-side.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Ajax Server-side</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Search Options</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/search-options/column-search.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Column Search</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/search-options/advanced-search.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Advanced Search</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Extensions</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/buttons.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Buttons</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/colreorder.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">ColReorder</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/keytable.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">KeyTable</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/responsive.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Responsive</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/rowgroup.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">RowGroup</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/rowreorder.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">RowReorder</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/scroller.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Scroller</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="crud/datatables/extensions/select.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">Select</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-upload-1"></i>
				            <span className="menu-text">File Upload</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item" aria-haspopup="true">
				                <a href="crud/file-upload/image-input.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Image Input</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="crud/file-upload/dropzonejs.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">DropzoneJS</span>
				                  <span className="menu-label">
				                    <span className="label label-danger label-inline">new</span>
				                  </span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="crud/file-upload/uppy.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Uppy</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-section">
				          <h4 className="menu-text">Features</h4>
				          <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-layers"></i>
				            <span className="menu-text">Bootstrap</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Bootstrap</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/typography.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Typography</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/buttons.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Buttons</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/button-group.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Button Group</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/dropdown.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Dropdown</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/navs.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Navs</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/tables.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tables</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/progress.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Progress</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/modal.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Modal</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/alerts.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Alerts</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/popover.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Popover</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/bootstrap/tooltip.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tooltip</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-background"></i>
				            <span className="menu-text">Custom</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Custom</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/utilities.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Utilities</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/label.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Labels</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/pulse.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Pulse</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/line-tabs.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Line Tabs</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/advance-navs.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Advance Navs</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/timeline.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Timeline</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/pagination.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Pagination</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/symbol.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Symbol</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/overlay.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Overlay</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/spinners.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Spinners</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/iconbox.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Iconbox</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/callout.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Callout</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/ribbons.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Ribbons</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/custom/accordions.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Accordions</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-interface-1"></i>
				            <span className="menu-text">Cards</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Cards</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/general.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">General Cards</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/stacked.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Stacked Cards</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/tabbed.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tabbed Cards</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/draggable.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Draggable Cards</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/tools.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Cards Tools</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/sticky.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Sticky Cards</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/cards/stretched.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Stretched Cards</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-rocket"></i>
				            <span className="menu-text">Widgets</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Widgets</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/lists.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Lists</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/stats.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Stats</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/charts.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Charts</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/mixed.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Mixed</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/tiles.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tiles</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/engage.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Engage</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/base-tables.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Base Tables</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/advance-tables.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Advance Tables</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/widgets/forms.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Forms</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-open-box"></i>
				            <span className="menu-text">Icons</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/svg.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">SVG Icons</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/custom-icons.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Custom Icons</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/flaticon.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Flaticon</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/fontawesome5.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Fontawesome 5</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/lineawesome.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Lineawesome</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/icons/socicons.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Socicons</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-calendar"></i>
				            <span className="menu-text">Calendar</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Calendar</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/calendar/basic.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Basic Calendar</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/calendar/list-view.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">List Views</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/calendar/google.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Google Calendar</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/calendar/external-events.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">External Events</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/calendar/background-events.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Background Events</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-diagram"></i>
				            <span className="menu-text">Charts</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Charts</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/charts/apexcharts.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Apexcharts</span>
				                </a>
				              </li>
				              <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				                <a href="index.html" className="menu-link menu-toggle">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">amCharts</span>
				                  <i className="menu-arrow"></i>
				                </a>
				                <div className="menu-submenu">
				                  <i className="menu-arrow"></i>
				                  <ul className="menu-subnav">
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="features/charts/amcharts/charts.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">amCharts Charts</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="features/charts/amcharts/stock-charts.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">amCharts Stock Charts</span>
				                      </a>
				                    </li>
				                    <li className="menu-item" aria-haspopup="true">
				                      <a href="features/charts/amcharts/maps.html" className="menu-link">
				                        <i className="menu-bullet menu-bullet-dot">
				                          <span></span>
				                        </i>
				                        <span className="menu-text">amCharts Maps</span>
				                      </a>
				                    </li>
				                  </ul>
				                </div>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/charts/flotcharts.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Flot Charts</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/charts/google-charts.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Google Charts</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-placeholder"></i>
				            <span className="menu-text">Maps</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Maps</span>
				                </span>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/maps/google-maps.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Google Maps</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/maps/leaflet.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Leaflet</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/maps/jqvmap.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">JQVMap</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
				          <a href="index.html" className="menu-link menu-toggle">
				            <i className="menu-icon flaticon-light"></i>
				            <span className="menu-text">Miscellaneous</span>
				            <i className="menu-arrow"></i>
				          </a>
				          <div className="menu-submenu">
				            <i className="menu-arrow"></i>
				            <ul className="menu-subnav">
				              <li className="menu-item menu-item-parent" aria-haspopup="true">
				                <span className="menu-link">
				                  <span className="menu-text">Miscellaneous</span>
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
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/blockui.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Block UI</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/perfect-scrollbar.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Perfect Scrollbar</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/treeview.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Tree View</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/bootstrap-notify.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Bootstrap Notify</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/toastr.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Toastr</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/sweetalert2.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">SweetAlert2</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/dual-listbox.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Dual Listbox</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/session-timeout.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Session Timeout</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/idle-timer.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Idle Timer</span>
				                </a>
				              </li>
				              <li className="menu-item" aria-haspopup="true">
				                <a href="features/miscellaneous/cropper.html" className="menu-link">
				                  <i className="menu-bullet menu-bullet-dot">
				                    <span></span>
				                  </i>
				                  <span className="menu-text">Cropper</span>
				                </a>
				              </li>
				            </ul>
				          </div>
				        </li>
				      </ul>
				      {/* <!--end::Menu Nav--> */}
				    </div>
				    {/* <!--end::Menu Container--> */}
				  </div>
				  {/* <!--end::Aside Menu--> */}
				</div>
				{/* <!--end::Aside--> */}
			</>
    );
  }
}
