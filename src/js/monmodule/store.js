//@flow
import { App } from "./reducers.js";
import * as _ from "lodash";
import thunk from "redux-thunk";
import * as immutable from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reduxStore = null;
export const getStore = (params: {}): any => {
    if (!!reduxStore) return reduxStore; // instancier le store 1 seule fois
    
    const initStore = immutable.fromJS(params);
    const finalStore = initStore.merge(immutable.fromJS({
        // autres infos d'init
    }));
    reduxStore = createStore(
        App,
        finalStore,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return reduxStore;
};