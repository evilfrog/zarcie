//Predefined action types
export const types = {
    INIT_SIDEBAR: 'INIT_SIDEBAR',
    ACTIVATE_LIST: 'ACTIVATE_LIST'
}

//Action creators
export function activateList(menu, item) {
    return {type: types.ACTIVATE_LIST, menu, item};
}

export function initSidebar(menus) {
    return {type: types.INIT_SIDEBAR, menus}
}
