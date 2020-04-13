import React from 'react';

const TodoInput = props => {
    const { textfield, setTextfield, setTask } = props;

    const handlerOnChangeTextfield = event => {
        let text = event.target.value;
        setTextfield(text);
    };
    
    const handlerSendButtonClick = () => {
        setTask(textfield);
    }

    let handlerEnterUpOnInput = event => {
        if(textfield !== '') if(event.keyCode === 13) setTask(textfield);
    }

    return (
        <div className="todo-input">
            <input onKeyUp={ handlerEnterUpOnInput } placeholder="Давай сделаем что-нибудь?" onChange={ handlerOnChangeTextfield } value={textfield} className="todo-input__input" type="text"/>
            <button onClick={ handlerSendButtonClick } className={!textfield ? "todo-input__send-task todo-input__send-task_disabled" : "todo-input__send-task"}>Поставить задачу</button>
        </div>
    )
}

export default TodoInput;