/** @format */

const { Router } = require('express');
const {
  getAll,
  createTodo,
  updateTodo,
  modifyTodo,
  removeTodo,
  getTodsOnTitle,
  getAllCompleted,
  getAllPending,
} = require('../controller/todoController');

const todoRoute = new Router();

// get all the tod's
todoRoute.get('/', getAll);

// Create a todo
todoRoute.post('/', createTodo);

// To update the task
todoRoute.put('/update/:todoId', updateTodo);

// To modify todo to complete
todoRoute.put('/complete/:todoId', modifyTodo);

// Delete the todo
todoRoute.delete('/delete/:todoId', removeTodo);

// Get all the todo with title
todoRoute.get('/title', getTodsOnTitle);

// get all todo completed
todoRoute.get('/completed', getAllCompleted);

// get all todos pending
todoRoute.get('/pending', getAllPending);

module.exports = todoRoute;
