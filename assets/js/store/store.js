import { createStore, compose, applyMiddleware } from 'Redux'
import ReduxPromise from 'redux-promise';

import reducers from '../reducers/index'

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        compose (
            applyMiddleware(ReduxPromise)
        )
    );

    return store;
}
