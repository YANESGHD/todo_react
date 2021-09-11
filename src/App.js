import "./App.css";
import { useEffect, useState } from "react";
import { Task } from "./Task.js";
import { createTask, getAllTasks } from './services/notes/index';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllTasks()
      .then(tasks => {
        setTasks(tasks);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskToAddToState = {
      id: tasks.length + 1,
      content: newTask,
      body: newTask,
    };

    createTask(taskToAddToState)
      .then(newTask => {
        setTasks(prevTasks => prevTasks.concat(newTask))
      }).catch(e => {
        console.log(e)
      })

    setNewTask("");
  };

  return (
    <>
      <h1>
        <strong>TODO LIST</strong>
      </h1>
      {loading ? <p>Cargando...</p> : ""}
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>➕</button>
      </form>
    </>
  );
}
