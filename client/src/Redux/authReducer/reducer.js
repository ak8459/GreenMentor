import {
    POST_LOGIN_ERROR,
    POST_LOGIN_LOADING,
    POST_LOGIN_SUCCESS,
    POST_CREATEUSER_SUCCESS,
    POST_CREATEUSER_ERROR
} from "./actionTypes";


const intitialState = {
    user: null,
    token: null,
    avatar: "",
    isError: false,
}


export const authReducer = (state = intitialState, { type, payload }) => {
    switch (type) {
        case POST_LOGIN_LOADING: {
            return {
                ...state,
                isError: false,
            };
        }

        case POST_LOGIN_SUCCESS: {
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isError: false,
            };
        }
        case POST_LOGIN_ERROR: {
            return {
                ...state,
                isError: true,
            };
        }
        case POST_CREATEUSER_SUCCESS: {
            return {
                ...state,
            };
        }
        case POST_CREATEUSER_ERROR: {
            return {
                ...state,
                isError: true,
            };
        }

        default: {
            return state;
        }
    }

}


