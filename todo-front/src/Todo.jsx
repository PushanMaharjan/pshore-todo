import { useTodos } from "./context/TodoContext";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const Todo = () => {
  const { todos } = useTodos();

  return (
    <div style={{ padding: "30px 0px" }}>
      <div className="todo-container">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};
