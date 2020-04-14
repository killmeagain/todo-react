import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { deleteTask, completedTask, getTasks } from '../../redux/thunk-creators/thunk-creators';

const TodoListContainer = React.memo( props => {

    useEffect(() => {
        props.getTasks();
    }, []);

    return (
        <TodoList
            tasks={props.tasks}
            deleteTask={props.deleteTask}
            setCompleted={props.setCompleted}
        />
    )
});



const mapStateToProps = state => ({
    tasks: state.app.tasks
});

const mapDispatchToProps = dispatch => ({
    deleteTask: id => {
        dispatch(deleteTask(id));
    },

    setCompleted: id => {
        dispatch(completedTask(id));
    },

    getTasks: () => {
        dispatch(getTasks());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);