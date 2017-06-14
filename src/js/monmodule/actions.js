//@flow

export const SET_LOADING = "SET_LOADING";

import * as _ from "lodash";

export const setLoading = (data: boolean) => {
    return {
        type: SET_LOADING,
        data: data
    };
};


// APPELS SERVEUR

// export const asyncGet = () => {
//     return (dispatch) => {
//         const url =  ;
//         const data = {};
//         dispatch(setLoading( true ));
//         $.ajax({
//             url: url,
//             data: data,
//             method: "GET",
//             success: (data) => {
//                 dispatch(setLoading( false ));
//             },
//             error: () => {
//                 dispatch(setLoading( false ));
//             }
//         });
//     };
// };
