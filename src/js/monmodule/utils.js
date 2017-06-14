//@flow
import * as _ from "lodash";
const __ =  _.partial.placeholder;

const gId = (o) => {
    if (typeof o === "undefined") return undefined;
    let typePrefix = 1;
    if (typeof o.get === "function") {
        typePrefix = typeId(o.get("type"));
        return +("" + typePrefix + o.get("id"));
    }
    typePrefix = typeId(o.type);
    return +("" + typePrefix + o.id);
};
const equals = function(other) {
    return (gId(this) === gId(other));
};
const hashCode = function() {
    return gId(this);
};

export const toJS = (props) => {
    const sortie = {};
    _.each(props, (o, k) => {
        if (!!o && typeof o.toJS === "function") {
            sortie[ k ] = o.toJS();
        } else {
            sortie[ k ] = o;
        }
    });
    return sortie;
};

export const formatElement = (element: mixed): mixed => {
    element.equals = equals;
    element.hashCode = hashCode;
    return element;
};
