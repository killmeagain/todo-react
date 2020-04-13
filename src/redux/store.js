import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./reducers/todo-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    app: todoReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;