import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "./TodosReducer/reducer";
import { authReducer } from "./authReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    todosReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));