import React, { Component } from 'react';
import { connect } from 'react-redux'

import SidebarNavEl from './SidebarNavEl'

class SidebarNav extends React.Component {
    render() {
        return (
            <ul className="nav nav-sidebar">
                {
                    this.props.items.map((item, index) => (this.props.activeSidebar.menu == this.props.menu && this.props.activeSidebar.item == index)
                        ? <SidebarNavEl key={ index } click={this.props.click} menu={this.props.menu} item={index} name={item.name} active="true" />
                        : <SidebarNavEl key={ index } click={this.props.click} menu={this.props.menu} item={index} name={item.name} />
                    )
                }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeSidebar: state.activeSidebar,
        menus: state.menus,
    };
}

export default connect(mapStateToProps)(SidebarNav)
