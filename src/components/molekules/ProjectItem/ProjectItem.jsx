import React, { Component } from 'react'
import DropDownMenu from './components/DropDownMenu'
import { Button } from 'components'

export default class ProjectItem extends Component {
    render() {
        const { item } = this.props;
        const { name, label, fe, be, db, description, progress } = item;
        console.log(item);
        return (
            <div className="col-xl-3">
                <div className="kt-portlet kt-portlet--height-fluid">
                    <div className="kt-portlet__head kt-portlet__head--noborder">
                        <div className="kt-portlet__head-label">
                        </div>
                        <div className="kt-portlet__head-toolbar">
                            <a href="davra.cz" className="btn btn-icon" data-toggle="dropdown">
                                <i className="flaticon-more-1 kt-font-brand"></i>
                            </a>
                            <DropDownMenu />
                        </div>
                    </div>
                    <div className="kt-portlet__body">
                        <div className="kt-widget kt-widget--user-profile-2">
                            <div className="kt-widget__head">
                            <div className="kt-widget__media">
                                <img className="kt-widget__img kt-hidden-" src="./media/project-logos/1.png" alt="item" />
                                <img className="kt-widget__img kt-hidden" src="./media/users/300_21.jpg" alt="item" />
                                <div className="kt-widget__pic kt-widget__pic--success kt-font-success kt-font-boldest kt-hidden">ChS</div>
                            </div>
                            <div className="kt-widget__info">
                                <a href="davra.cz" className="kt-widget__titel kt-hidden-">{name}</a>
                                <a href="davra.cz" className="kt-widget__username kt-hidden">{label}</a>
                            </div>
                        </div>

                        <div className="kt-widget__body">
                            <div className="kt-widget__section">{description}</div>                                        

                            <div className="kt-widget__item">
                                <div className="kt-widget__contact">
                                    <span className="kt-widget__label">FE:</span>
                                    <a href="davra.cz" className="kt-widget__data">{fe}</a>
                                </div>
                                <div className="kt-widget__contact">
                                    <span className="kt-widget__label">BE:</span>
                                    <a href="davra.cz" className="kt-widget__data">{be}</a>
                                </div>
                                <div className="kt-widget__contact">
                                    <span className="kt-widget__label">DB:</span>
                                    <a href="davra.cz" className="kt-widget__data">{db}</a>
                                </div>
                                <div className="kt-widget__contact">
                                    <span className="kt-widget__label">Progress</span>
                                    <a href="davra.cz" className="kt-widget__data">{progress}</a>
                                </div>
                            </div>
                        </div>

                        <div className="kt-widget__footer">
                            <Button btnStyle={'label-warning'} size={'lg'} value={'view project'} />
                        </div>
                    </div>         
                    </div>
                </div>
            </div>
        );
    }
}