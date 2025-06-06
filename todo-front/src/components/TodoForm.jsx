import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { createTodo } from "../services/todo";

export const TodoForm = () => {
  const { fetchTodos, setFilter } = useTodos();
  const [formVal, setFormVal] = useState({
    task: "",
    short_desc: "",
    date_and_time: "",
  });
  const [error, setError] = useState({});

  const isValid = () => {
    let newErrors = {};
    if (!formVal.task || formVal.task === "") {
      newErrors.task = "Name is required";
    }

    if (!formVal.short_desc || formVal.short_desc === "") {
      newErrors.short_desc = "Short description is required";
    }

    if (!formVal.date_and_time || formVal.date_and_time === "") {
      newErrors.date_and_time = "Date and time is required";
    }

    if (formVal.task.length > 50) {
      newErrors.task = "Must be less that 50 characters";
    }

    if (formVal.short_desc.length > 150) {
      newErrors.short_desc = "Must be less that 150 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isValid()) return;
    setError({});

    createTodo(formVal)
      .then(() => {
        console.log("here");
        setFormVal({
          task: "",
          short_desc: "",
          date_and_time: "",
        });
        setFilter("");
        fetchTodos();
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
      });
  };

  return (
    <>
      <div className="todo-input">
        <div className="label">Name</div>
        <input
          name="task"
          value={formVal.task}
          onChange={handleChange}
          required
        />
        {error.task && <div className="error">{error.task}</div>}

        <div className="label">Short Description</div>
        <textarea
          name="short_desc"
          rows="3"
          value={formVal.short_desc}
          onChange={handleChange}
          required
        />
        {error.short_desc && <div className="error">{error.short_desc}</div>}

        <div className="label">Date and Time</div>
        <input
          name="date_and_time"
          type="datetime-local"
          value={formVal.date_and_time}
          onChange={handleChange}
          required
        />
        {error.date_and_time && (
          <div className="error">{error.date_and_time}</div>
        )}

        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};
