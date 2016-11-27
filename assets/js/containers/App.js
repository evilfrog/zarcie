import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu'
import Content from '../components/Content'

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Menu />
                <Content />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        activeSidebar: state.activeSidebar,
        menus: state.menus,
    };
}

export default connect(mapStateToProps)(App)
