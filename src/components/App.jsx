import React from 'react';
import TodoListContainer from './TodoList/TodoListContainer'
import TodoInputContainer from './TodoInput/TodoInputContainer'

const App = () => {
    return (
        <div className="app">
            <div className="app__container">
                <h1 className="app__title">Todo List</h1>
                <TodoInputContainer />
                <TodoListContainer />
            </div>
        </div>
    )
}

export default App;