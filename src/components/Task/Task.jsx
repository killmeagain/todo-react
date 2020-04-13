import React from 'react';

const Task = props => {
    const { completed, title, id, setCompleted, deleteTask } = props;

    const handlerCloseTaskButtonClick = () => {
        deleteTask(id);
    }

    const handlerClickCompleted = (event) => {
        if(!event.target.classList.contains("task__close-task")) setCompleted(id);
    }
    
    return (
        <div onClick={handlerClickCompleted} className="task">
            <div className={completed ? "task__completed task__completed_img" : "task__completed"}></div>
            <p className={ completed ? "task__title task__title_completed" : "task__title" }>{title}</p>
            <button onClick={ handlerCloseTaskButtonClick } className="task__close-task" type="button"></button>
        </div>
    )
}

export default Task;