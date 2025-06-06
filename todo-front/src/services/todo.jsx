import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async (filter = "") => {
  const res = await axios.get(`${API_URL}${filter ? `?filter=${filter}` : ""}`);
  return res.data;
};

export const createTodo = async (todoData) => {
  const res = await axios.post(API_URL, todoData);
  console.log(res.data);
  return res.data;
};

export const updateTodoStatus = async (id, completedVal) => {
  const res = await axios.put(`${API_URL}/${id}`, {
    completed: completedVal,
  });
  return res.data;
};

export const deleteTodoData = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
