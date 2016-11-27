import { types } from '../actions/index'

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case types.INIT_SIDEBAR:
            var menus = action.menus
            $.ajax({
                url: "/days.json",
                success: function(data) {
                    menus = data.body
                },
                dataType: "json",
                async: false
            });

            return menus
            break;
        default:
            return state
            break;
    }
};
