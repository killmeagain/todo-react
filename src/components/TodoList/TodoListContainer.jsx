import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { deleteTask, completedTask, getTasks } from '../../redux/thunk-creators/thunk-creators';

class TodoListContainer extends React.Component {

    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        return (
            <TodoList 
                tasks={this.props.tasks}
                deleteTask={this.props.deleteTask}
                setCompleted={this.props.setCompleted}
            />
        )
    }
}


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