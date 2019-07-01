import * as actionTypes from '../utils/actionTypes';

let todoId = 1;

// htmlのmonthはYYYY-MM, dateはYYYY-MM-DD
export const addTodo = (text, date) => {
  return {
    type: actionTypes.ADD_TODO,
    id: todoId++,
    text,
    date
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id
  };
};

export const setVisiblityFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBLITY_FILTER,
    filter
  };
};