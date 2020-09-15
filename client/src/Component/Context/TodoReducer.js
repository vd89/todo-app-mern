/** @format */

import { GET_ALL, GET_COMPLETED, GET_PENDING, CREATE_TASK, UPDATE_TASK, MODIFY_TASK, REMOVE_TASK } from './Types';

export default (state, action) => {
  // console.log(action);
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        todos: action.payload.data.allTodo,
      };
    case CREATE_TASK:
      return {
        ...state,
        todos: [action.payload.data.createdTask, ...state.todos],
      };
    case REMOVE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case MODIFY_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };

    default:
      return state;
  }
};
