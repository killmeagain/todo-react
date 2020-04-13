import { GET_TASKS, SET_TASK, SET_TEXTFIELD, DELETE_TASKS, SET_COMPLETED } from "../action-types/action-types";

const initialState = {
    tasks: [],
    textfield: ''
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS: 
            return {
                ...state,
                tasks: [...action.tasks]
            };
        case SET_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: state.tasks.length, title: state.textfield.trim(), completed: false }],
                textfield: ''
            };
        case SET_TEXTFIELD:
            return {
                ...state,
                textfield: action.text.trim() === '' ? '' : action.text
            };
        case DELETE_TASKS:
            return {
                ...state,
                tasks: state.tasks.filter( element => action.id !== element.id )
            };
        case SET_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map( task => {
                    if(task.id === action.id) {
                        if(task.completed) return {...task, completed: false}
                        return {...task, completed: true}
                    }
                    return task;
                })
            };
        default:
            return state;
    }
}

export default todoReducer;