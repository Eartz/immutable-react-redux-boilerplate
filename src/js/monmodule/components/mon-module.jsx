//@flow
import React from "react";
import * as _ from "lodash";
import { toJS } from "../utils.js";


export class MonModule extends React.Component {
    props: {
        loading: boolean
    };
    state: {};
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    render() {
        const props = toJS(this.props);
        
        return (
            <div>
                {"Mon module"}
            </div>
        );
    }
}