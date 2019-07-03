import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import Filter from '../components/Filter';


const TodoPanel = () => (
  <div id="todo">
    <Filter />
    <TodoList />
    <AddTodo />
  </div>
);

export default TodoPanel;