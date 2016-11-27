import React, { Component } from 'react';
import { connect } from 'react-redux'

import { activateList } from '../actions/index'

class SidebarNavEl extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(activateList(this.props.menu, this.props.item))
    }

    render() {
        if (this.props.active) {
            return (
                <li onClick={this.handleClick} className="active"><a href="#">{this.props.name} <span className="sr-only">(current)</span></a></li>
            );
        }

        return (
            <li onClick={this.handleClick}><a href="#">{this.props.name}</a></li>
        );
    }
}

export default connect()(SidebarNavEl)
