const React = require("react");
const ReactDOM = require("react-dom");
const MonModuleView = require("./mon-module.jsx");
const Reducers = require("./reducers");
const immutable = require("immutable");
const _ = require("lodash");

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

class MonModule {
    constructor(params) {
        this.elemID = params.elemID;
        var initStore = immutable.fromJS({
            // store
        });

        this.store = finalCreateStore(Reducers.App, initStore);
        this.render();
    }
    render() {
        ReactDOM.render(
            React.createElement(MonModuleView, {
                store: this.store
            }),
            document.getElementById(this.elemID)
        );
    }
}

module.exports = MonModule;
