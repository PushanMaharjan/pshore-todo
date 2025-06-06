import { useEffect, useState } from "react";
import { useTodos } from "../context/TodoContext";
import { deleteTodoData, updateTodoStatus } from "../services/todo";
import dayjs from "dayjs";

export const TodoList = () => {
  const { todos, fetchTodos, filter, setFilter } = useTodos();

  const deleteTodo = async (id) => {
    await deleteTodoData(id);
    fetchTodos();
  };

  const markDone = async (todo) => {
    await updateTodoStatus(todo._id, !todo.completed);
    fetchTodos(filter);
  };

  useEffect(() => {
    fetchTodos(filter);
  }, [filter]);

  return (
    <>
      <div className="todo-list">
        <div className="filter-wrapper">
          <div>
            <input
              type="radio"
              id="all"
              defaultChecked
              name="filter"
              onChange={() => setFilter("")}
              value="All"
            />
            <label for="all">All</label>
          </div>

          <div>
            <input
              type="radio"
              id="upcoming"
              name="filter"
              value="Upcoming"
              onChange={() => setFilter("upcoming")}
            />
            <label for="upcoming">Upcoming</label>
          </div>

          <div>
            <input
              type="radio"
              id="done"
              name="filter"
              value="Done"
              onChange={() => setFilter("done")}
            />
            <label for="done">DONE</label>
          </div>
        </div>
        {todos?.length === 0 ? (
          <p> No todos available </p>
        ) : (
          todos?.map((item, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-item-content">
                <input
                  onChange={() => markDone(item)}
                  checked={item.completed}
                  type="checkbox"
                />
                <div className="item-content">
                  {item.task}
                  <div className="item-short">{item.short_desc}</div>
                  <div className="item-date">
                    {dayjs(item.date_and_time).format("YYYY-MM-DD HH:mm")}
                  </div>
                </div>
              </div>
              <button onClick={() => deleteTodo(item._id)}>
                <img src="./delete.svg" />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};
