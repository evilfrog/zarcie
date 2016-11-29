//Predefined action types
export const types = {
    INIT_SIDEBAR: 'INIT_SIDEBAR',
    ACTIVATE_LIST: 'ACTIVATE_LIST',
    LOAD_LIST: 'LOAD_LIST',
}

//Action creators
export function activateList(menu, item) {
    return {type: types.ACTIVATE_LIST, menu, item};
}

export function loadList(name) {
    return {type: types.LOAD_LIST, name};
}

export function initSidebar(menus) {
    return {type: types.INIT_SIDEBAR, menus}
}
