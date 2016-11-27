import React, { Component } from 'react';
import { connect } from 'react-redux'

import { initSidebar } from '../actions/index'
import SidebarNav from './SidebarNav'

class Sidebar extends React.Component {
    componentDidMount() {
        this.props.dispatch(initSidebar(this.props.menus))
    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                {
                    this.props.menus.map((items, menu) => <SidebarNav key={menu} menu={menu} items={items} />)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeSidebar: state.activeSidebar,
        menus: state.menus,
    };
}

// export default Sidebar
export default connect(mapStateToProps)(Sidebar)
