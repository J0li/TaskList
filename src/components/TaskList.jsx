import React, { useState } from "react";

function TaskList() {
    const [Task, setTask] = useState([]);
    const [newTask, setnewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTask([...Task, newTask]);
            setnewTask('');
        }
    };

    const removeTask = (index) => {
        const newTasks = [...Tasks];
        newTasks.slice(index, 1);
        setTasks(newTasks);
    };

    return (
        < div >
            <h2>Task List</h2>
            <input type="text" value={newTask} onChange={(e) => setnewTask(e.target.value)} placeholder="Add a new task" />
            <button onClick={newTask}>Add</button>
            <ul>
                {Tasks.map((Task, index) => (
                    <li key={index}>
                        {Task}{''}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TaskList;