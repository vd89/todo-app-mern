/** @format */

const Todo = require('../models/todoModels');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const allTodo = await Todo.getAllTodo();
      return res.status(200).json({ data: { message: 'Success', allTodo } });
    } catch (error) {
      next(error);
    }
  },
  createTodo: async (req, res, next) => {
    try {
      const newTask = new Todo(req.body);
      const createdTask = await newTask.save();
      return res.status(200).json({ data: { message: 'Success', createdTask } });
    } catch (error) {
      if (error.name === 'ValidationError') {
        res.status(422);
      }
      next(error);
    }
  },
  updateTodo: async (req, res, next) => {
    try {
      const todoId = req.params.todoId;
      const { description } = req.body;
      const updateTask = await Todo.updateTask(description, todoId);
      return res.status(200).json({ data: { message: 'Success', updateTask } });
    } catch (error) {
      next(error);
    }
  },
  modifyTodo: async (req, res, next) => {
    try {
      const todoId = req.params.todoId;
      const completedTask = await Todo.completeTask(todoId);
      return res.status(200).json({ data: { message: 'Success', completedTask } });
    } catch (error) {
      next(error);
    }
  },
  removeTodo: async (req, res, next) => {
    try {
      const todoId = req.params.todoId;
      await Todo.removeTask(todoId);
      const removeTask = 'The todo was deleted';
      return res.status(200).json({ data: { message: 'Success', removeTask } });
    } catch (error) {
      next(error);
    }
  },
  getTodsOnTitle: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'To get all the task based in title' } });
  },
  getAllCompleted: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'To get all the task based completed' } });
  },
  getAllPending: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'To get all the pending task' } });
  },
};

