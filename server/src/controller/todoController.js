/** @format */

const Todo = require('../models/todoModels');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const allTodo = await Todo.getAllTodo()
      return res.status(200).json({data: { message: 'Success', allTodo }})  
    } catch (error) {
      next(error)
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
  updateTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is a updateTodo task' } });
  },
  modifyTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is a modify todo to complete the task' } });
  },
  removeTodo: async (req, res) => {
    return res.status(200).json({ data: { message: 'Success', value: 'This is to delete a task that is done ' } });
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

