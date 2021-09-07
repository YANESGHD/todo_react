import React from "react";
import "./App.css";

const TODO_LIST = ["Lavar", "Pasear a Koku", "Ayudar a mi mama"];

const App = () => {
  console.log('App is being rendered')
  const [todoList, setTodoList] = React.useState(TODO_LIST)

  const addInput = () => {
    const newTask = window.prompt("Enter your task: ");

    const newTodoList = todoList.concat(newTask);
    
    setTodoList(newTodoList)
  }

  // const addTask = () => {
  //   const task = 'Estudiar programacion';
  //   const newTodoList = todoList.concat(task);
    
  //   setTodoList(newTodoList)
  // }

  return (
    <>
      <h1 className="title">TODO LIST</h1>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <form>
        <label>
          Task:
          <br />
          <input type="text" name="name" />
        </label>
        <input onClick={addInput} type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
