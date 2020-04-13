import React from 'react';
import Task from '../Task/Task';

const TodoList = props => {
    const { tasks, deleteTask, setCompleted } = props;
    let arrayElementsList = tasks.map( element => {
        return (
            <li key={element.id} className="todo-list__item">
                <Task
                    id={element.id}
                    completed={element.completed}
                    title={element.title}
                    deleteTask={deleteTask}
                    setCompleted={setCompleted}
                />
            </li>
        )
    });
    
    return(
        <ul className="todo-list">
            {arrayElementsList}
        </ul>
    ) 
}

export default TodoList;