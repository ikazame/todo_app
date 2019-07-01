import React from 'react';

const CalCell = ({day, todos}) => (
  <div className='cal-cell'>
    <div>{day}</div>
    <div>{
      todos.map((todo) => (
        <span className={todo.completed ? 'text-primary' : 'text-danger'}>●</span>
      ))
    }</div>
  </div>
);

export default CalCell;