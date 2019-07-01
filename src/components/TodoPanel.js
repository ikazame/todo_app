import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';

const TodoPanel = () => {
  return (
    <div id="todo">
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoPanel;