//@flow
import { Map, Set, fromJS } from "immutable";
import * as _ from "lodash";
import {
    SET_LOADING
} from "./actions.js";

const Reducer = (state: Map, action: {type: string, data: any}) => {
    let newState = state.set("lastAction", action.type);
    switch(action.type) {

    case SET_LOADING:
        newState = newState.set("loading", action.data);
        return newState;
    }
    return newState;
};

module.exports.App = Reducer;