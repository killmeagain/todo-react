let tasks = [];

if(!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



let todoAPI =  {
    getTasks() {
        return JSON.parse(localStorage.getItem('tasks'));
    },
    
    setTask(title) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let newTask = { id: tasks.length, title, completed: false };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    deleteTask(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let newTasks = tasks.filter( task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    },

    setCompleted(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let newTasks = tasks.map( task => {
            if(task.id === id) {
                if(task.completed) return { ...task, completed: false };
                if(!task.completed) return { ...task, completed: true };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
}

export default todoAPI;