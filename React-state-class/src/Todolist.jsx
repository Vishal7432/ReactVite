import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export default function Todolist() {
  let [todos, setTodos] = useState([
    { task: "Sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((PrevTodos) => {
      return [...PrevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let taskDelet = (id) => {
    setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a tasks"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add task</button>
      <br />
      <br />
      <hr />
      <h3>Todo List</h3>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            <span
              style={todos.isDone ? { textDecoration: "line-through" } : {}}
            >
              {todos.task}{" "}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => taskDelet(todos.id)}>Delete</button>
            <button onClick={() => markAsDone(todos.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button
        onClick={markDoneAll}
        style={todos.markDoneAll ? { textDecoration: "line-through" } : {}}
      >
        Mark as done All
      </button>
    </div>
  );
}
