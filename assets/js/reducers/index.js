import { combineReducers } from 'redux';
import activateSidebar from './activateSidebar';
import loadList from './loadList';
import Sidebar from './sidebar';

const reducers = combineReducers({
    activeSidebar: activateSidebar,
    menus: Sidebar,
    list: loadList,
});

export default reducers;
