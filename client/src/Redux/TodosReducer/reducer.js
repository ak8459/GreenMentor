import {
    TODO_LOADING,
    TODO_SUCCESS,
    TODO_FAIL,
    TODO_DELETE_SUCCESS,
    TODO_DELETE_FAIL,
    TODO_EDIT_SUCCESS,
    TODO_EDIT_FAIL,
    TODO_ADD_SUCCESS,
    TODO_ADD_FAIL
} from "./actionType";


const intitialState = {
    todos: [],
    isError: false,
    isLoading: false,
    Err: ''

}


export const todosReducer = (state = intitialState, { type, payload }) => {
   
    switch (type) {

        case TODO_LOADING: {
            return {
                ...state,
                isError: false,
                isLoading: true
            };

        }
        case TODO_SUCCESS: {
            return {
                ...state,
                todos: payload.todos,
                isError: false,
                isLoading: false
            };
        }

        case TODO_FAIL: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                Err: payload.status

            };
        }
        case TODO_DELETE_SUCCESS: {
            return {
                ...state
            };
        }

        case TODO_DELETE_FAIL: {
            return {
                ...state,
                isError: true,
            };
        }
        case TODO_EDIT_SUCCESS: {
            return {
                ...state
            };
        }

        case TODO_EDIT_FAIL: {
            return {
                ...state,
                isError: true
            };
        }

        case TODO_ADD_SUCCESS: {
            return {
                ...state
            };
        }
        case TODO_ADD_FAIL: {
            return {
                ...state,
                isError: true
            };
        }

        default: {
            return state;
        }

    }

}
