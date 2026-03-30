import { useContext, createContext } from "react";

export const TodoContext = createContext({
  Todos: [
    {
      id: 1,
      todo: "TodoMg",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, newTodo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
