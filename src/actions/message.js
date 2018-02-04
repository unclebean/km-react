import {
    SET_MESSAGE
} from '../types/message';
export const setMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SET_MESSAGE,
            payload: {
                message
            }
        })
    }
}

export const setErrorMessage = (error) => {
    return dispatch => {
        dispatch({
            type: "error",
            payload: {
                error
            }
        });
    };
}