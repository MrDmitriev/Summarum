import React, { Component } from 'react'

export default  class MainWraper extends Component {
    render() {
        return (
            <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-aside--minimize--hover">
                {this.props.children}
            </div>
        );
    }
};
