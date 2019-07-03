import React from 'react';
import {PropTypes} from 'prop-types';
import * as C from '../utils/constant';
import Todo from '../components/Todo';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import { toggleTodo } from '../actions';

let TodoList = ({todos, onToggleClick}) => (
  <ListGroup className="todo-list">
    {todos.map((todo) => 
      <Todo key={todo.id} {...todo} onButtonClick={() => onToggleClick(todo.id)} />  
    )}
  </ListGroup>
);


TodoList.prototype = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToggleClick: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter, selectedDate) => {
  switch(filter){
  case C.FILTER.SHOW_ALL:
    return todos;
  case C.FILTER.SHOW_COMPLETED:
    return todos.filter((todo) => todo.completed);
  case C.FILTER.SHOW_ACTIVE:
    return todos.filter((todo) => !todo.completed);
  case C.FILTER.SHOW_DATE:
    return todos.filter((todo) => todo.date === selectedDate);
  default:
    // console.log('Unknown Filter');
    return todos;
  }
};
const mapStateToProps = (state) => {
  return {todos: getVisibleTodos(state.todos, state.visiblityFilter, state.calendar.selectedDate)};
};
const mapDispathToProps = (dispatch) => {
  return {onToggleClick: (id) => dispatch(toggleTodo(id))};
};

TodoList = connect(
  mapStateToProps,
  mapDispathToProps
)(TodoList);


export default TodoList;