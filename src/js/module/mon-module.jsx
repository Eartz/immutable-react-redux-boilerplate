const React = require("react");
const immutable = require('immutable');
const actions = require('./actions.js');
const _ = require("lodash");

class MonModuleView extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
        };
    }
    componentDidMount() {
        this.props.store.subscribe(() => {
            this.forceUpdate();
        });  
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

module.exports = MonModuleView;
