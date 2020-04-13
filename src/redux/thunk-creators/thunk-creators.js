import { SET_TASK_AC, DELETE_TASKS_AC, SET_COMPLETED_AC, GET_TASKS_AC } from "../action-creators/action-creators";
import todoAPI from '../../api/api';

// Thunk creators
export const setTask = title => {
    return dispatch => {
        todoAPI.setTask(title);
        dispatch(SET_TASK_AC());
    }
};

export const deleteTask = id => {
    return dispatch => {
        todoAPI.deleteTask(id);
        dispatch(DELETE_TASKS_AC(id));
    }
};

export const completedTask = id => {
    return dispatch => {
        todoAPI.setCompleted(id);
        dispatch(SET_COMPLETED_AC(id));
    }
};

export const getTasks = () => {
    return dispatch => {
        let tasks = todoAPI.getTasks();
        dispatch(GET_TASKS_AC(tasks));
    }
};