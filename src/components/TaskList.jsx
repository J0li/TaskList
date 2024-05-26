import React, { useState } from "react";
import './TaskList.css';

function TaskList() {
    const [Tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...Tasks, newTask]);
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
            <button className="btn-add" onClick={addTask}>Add</button>
            <ul>
                {Tasks.map((Task, index) => (
                    <li key={index}>
                        {Task}{''}
                        <button className="btn-remove" onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TaskList;
