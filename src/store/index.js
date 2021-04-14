import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

/**
 * remove composeWithDevTools option before production
 * @param preloadedState
 */
export default function configureStore(preloadedState) {
    let persistedState = {};
    const localStoreState = localStorage.getItem('rst'); //rx = redux Storage
    if (localStoreState) {
        persistedState = JSON.parse(localStoreState);
    }

    const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware))); //dev

    store.subscribe(() => {
        localStorage.setItem('rst', JSON.stringify(store.getState()));
    });
    return store;
}
