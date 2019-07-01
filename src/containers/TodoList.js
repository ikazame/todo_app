import React from 'react';
import {PropTypes} from 'prop-types';
import * as C from '../utils/constant';
import Todo from '../components/Todo';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import { toggleTodo } from '../actions';
import Filter from '../components/Filter';


let TodoList = ({todos, onToggleClick}) => {
  // console.log('todos:', todos);
  return (
    <ListGroup className="todo-list">
      <Filter />
      {todos.map((todo) => 
        <Todo key={todo.id} {...todo} onButtonClick={() => onToggleClick(todo.id)} />  
      )}
    </ListGroup>
  );
};

TodoList.prototype = {
  onToggleClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired
};

const getVisibleTodos = (todos, filter) => {
  console.log('filter', filter);
  switch(filter){
  case C.FILTER.SHOW_ALL:
    return todos;
  case C.FILTER.SHOW_COMPLETED:
    return todos.filter((todo) => todo.completed);
  case C.FILTER.SHOW_ACTIVE:
    return todos.filter((todo) => !todo.completed);
  default:
    console.log('Unknown Filter');
    return todos;
  }
};
const mapStateToProps = (state) => {
  return {todos: getVisibleTodos(state.todos, state.visiblityFilter)};
};
const mapDispathToProps = (dispatch) => {
  return {onToggleClick: (id) => dispatch(toggleTodo(id))};
};

TodoList = connect(
  mapStateToProps,
  mapDispathToProps
)(TodoList);


export default TodoList;