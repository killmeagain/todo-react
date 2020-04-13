import { GET_TASKS, SET_TASK, SET_TEXTFIELD, DELETE_TASKS, SET_COMPLETED } from "../action-types/action-types";

// Action creators
export const GET_TASKS_AC = tasks => ({ type: GET_TASKS, tasks });
export const SET_TASK_AC = () => ({ type: SET_TASK });
export const SET_TEXTFIELD_AC = text => ({ type: SET_TEXTFIELD, text });
export const DELETE_TASKS_AC = id => ({ type: DELETE_TASKS, id });
export const SET_COMPLETED_AC = id => ({ type: SET_COMPLETED, id });