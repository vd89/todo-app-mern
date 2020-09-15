/** @format */

import React, { useReducer } from 'react';
import Axios from 'axios';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';

import { GET_ALL, GET_COMPLETED, GET_PENDING, CREATE_TASK, UPDATE_TASK, MODIFY_TASK, REMOVE_TASK } from './Types';

const TodoState = (props) => {
  const initialState = {
    todos: [],
    todo: {},
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  // Get all the tod's
  const getAll = async () => {
    const res = await Axios.get('/api/todo');
    dispatch({
      type: GET_ALL,
      payload: res.data,
    });
  };

  // Add Todo
  const createTodo = async (formData) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    const res = await Axios.post('/api/todo', formData, config);
    dispatch({
      type: CREATE_TASK,
      payload: res.data,
    });
  };

  // complete task
  const modifyTodo = async (todoId) => {
    const res = await Axios.put(`/api/todo/complete/${todoId}`);
    dispatch({
      type: MODIFY_TASK,
      payload: todoId,
    });
  };
  // Remove Todo
  const removeTodo = async (todoId) => {
    await Axios.delete(`/api/todo/remove/${todoId}`);
    dispatch({
      type: REMOVE_TASK,
      payload: todoId,
    });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, todo: state.todo, getAll, removeTodo, createTodo, modifyTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
