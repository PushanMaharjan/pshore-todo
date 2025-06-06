import { createContext, useContext, useEffect, useState } from "react";
import { getTodos } from "../services/todo";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  console.log(filter);

  const fetchTodos = async (filter) => {
    try {
      const res = await getTodos(filter);
      setTodos(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos(filter);
  }, [filter]);

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, setFilter, filter }}>
      {children}
    </TodoContext.Provider>
  );
};
