import { types } from '../actions/index'

const initialState = {
    menu: 0,
    item: 0,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.ACTIVATE_LIST:
            return Object.assign({}, state, {
                menu: action.menu,
                item: action.item,
            })
            break;
        default:
            return state
            break;
    }
};
