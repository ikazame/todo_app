import React from 'react';
import classNames from 'classnames';

const CalCell = ({day, todos, active, onClick}) => (
  <div className={classNames('cal-cell', {active})} onClick={onClick}>
    <div>{day}</div>
    <div>{
      todos.map((todo) => (
        <span className={todo.completed ? 'text-primary' : 'text-danger'}>●</span>
      ))
    }</div>
  </div>
);

export default CalCell;