import { createStore } from 'Redux'

import reducers from '../reducers/index'

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState
    );

    return store;
}
