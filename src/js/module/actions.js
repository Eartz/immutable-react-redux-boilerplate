/**
 *
 * Actions
 * A dispatcher depuis les Vues pour declencher les reducers
 */
// const request = require("request");
// const JSON = window.JSON;

export const MY_ACTION = 'MY_ACTION';

export function myAction(data) {
    return {
        type: MY_ACTION,
        data: data
    };
}
