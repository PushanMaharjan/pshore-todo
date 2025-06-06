import { TodoModel } from '../models/todo.js';
import { todoUpdateValidation, todoValidation } from '../validators/todoValidator.js';

export const getTodos = async (req, res) => {
  try {
    const filter = {};
    if (req.query.filter === 'upcoming') {
      filter.completed = false;
    } else if (req.query.filter === 'done') {
      filter.completed = true;
    }

    const todos = await TodoModel.find(filter).sort({ date_and_time: 1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

export const createTodo = async (req, res) => {
  const { error } = todoValidation.validate(req.body);
  if (error) return res.status(400).json({ error });

  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

export const updateTodo = async (req, res) => {
  const { error } = todoUpdateValidation.validate(req.body);
  if (error) return res.status(400).json({ error });

  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};
