//@flow
import React from "react";
import ReactDOM from "react-dom";
import { MonModuleContainer } from "./containers/mon-module.jsx";
// import type { ParamsInput } from "./types.js";
import { getStore } from "./store.js";

window.MonModule = (params) => {
    const store = getStore(params);
    // window.debugStore = store;
    ReactDOM.render(
        React.createElement(MonModuleContainer, {
            store: store
        }),
        document.getElementById(params.element)
    );
};