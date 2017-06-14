//@flow
import * as _ from "lodash";

import * as actions from "../actions.js";
import { connect } from "react-redux";
import { MonModule } from "../components/mon-module.jsx";

const mapStateToProps = (state) => {
    return {
        loading: state.get("loading")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // init: () => {
        //     dispatch(actions.asyncGet());
        // },
    };
};

export const MonModuleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonModule);