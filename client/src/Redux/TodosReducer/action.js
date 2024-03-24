
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
import { axiosUtils } from "../../utils";

export const getTodos = () => {
    return (dispatch) => {
        dispatch({ type: TODO_LOADING });
        axiosUtils('/todos/get', 'get')
            .then((res) => {
              
                dispatch({ type: TODO_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                
                dispatch({ type: TODO_FAIL, payload: err.response });
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axiosUtils(`/todos/delete/${id}`, 'delete')
            .then((res) => {
                console.log(res);
                dispatch({ type: TODO_DELETE_SUCCESS });
                dispatch(getTodos())
            })
            .catch((err) => {
                dispatch({ type: TODO_DELETE_FAIL, payload: err });
            })
    }
}

export const editTodo = (id, title, description) => {
    return (dispatch) => {
        axiosUtils(`/todos/update/${id}`, 'patch', { title, description })
            .then((res) => {
                dispatch({ type: TODO_EDIT_SUCCESS });
                dispatch(getTodos())
            })
            .catch((err) => {
                dispatch({ type: TODO_EDIT_FAIL, payload: err });
            })
    }
}


export const addTodo = (newTodo) => {
    return (dispatch) => {
        axiosUtils('/todos/create', 'post', newTodo)
            .then((res) => {
                dispatch({ type: TODO_ADD_SUCCESS  });
               
            })
            .catch((err) => {
                dispatch({ type: TODO_ADD_FAIL, payload: err });
            })
    }
}

