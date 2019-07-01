import React from 'react';
import PropTypes from 'prop-types';
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

CalCell.propTypes = {
  day: PropTypes.number.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default CalCell;