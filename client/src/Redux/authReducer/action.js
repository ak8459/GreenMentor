import {
    POST_LOGIN_ERROR,
    POST_LOGIN_LOADING,
    POST_LOGIN_SUCCESS,
    POST_CREATEUSER_SUCCESS,
    POST_CREATEUSER_ERROR
} from "./actionTypes";

import { axiosUtils } from "../../utils";

export const loginUser = (data, navigate) => {
    return (dispatch) => {
        dispatch({ type: POST_LOGIN_LOADING });
        axiosUtils('/auth/login', 'post', data)
            .then((res) => {
                dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.data });
                navigate('/dashboard')
            })
            .catch((err) => {
                dispatch({ type: POST_LOGIN_ERROR, payload: err });
            })
    }
}

export const createUser = (data) => {
    return (dispatch) => {
        axiosUtils('/auth/register', 'post', data)
            .then((res) => {
                console.log(res);
                dispatch({ type: POST_CREATEUSER_SUCCESS, payload: res });
            })
            .catch((err) => {
                dispatch({ type: POST_CREATEUSER_ERROR, payload: err });
            })
    }
}