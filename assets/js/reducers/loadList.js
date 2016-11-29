import { types } from '../actions/index'

const initialState = {
    name: '',
    data: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_LIST:
            var list = []
            $.ajax({
                url: "/order/" + action.name,
                success: function(data) {
                    list = data.body
                },
                dataType: "json",
                async: false
            });

            return Object.assign({}, state, {
                name: action.name,
                data: (null == list) ? [] : list,
            })
            break;
        default:
            return state
            break;
    }
};
