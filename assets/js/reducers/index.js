import { combineReducers } from 'redux';
import Lists from './lists';
import Sidebar from './sidebar';

const reducers = combineReducers({
    activeSidebar: Lists,
    menus: Sidebar,
});

export default reducers;
