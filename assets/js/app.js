import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRedux from 'react-redux'
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

//Containers
import App from './containers/App'

//Components
import Menu from './components/Menu'
import SidebarNavEl from './components/SidebarNavEl'
import SidebarNav from './components/SidebarNav'

//Store
import configureStore from './store/store';

//Actions
import {types, initSidebar} from './actions/index'

//XXX: Default state???
const SuperState = {
    activeSidebar: {
        menu: 0,
        item: 0,
        name: 0,
    },
    menus: [],
    list: {
        name: '',
        data: [],
    },
};

const store = configureStore(SuperState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('body')
);
