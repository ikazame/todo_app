import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, Button} from 'react-bootstrap';

let Todo = ({text, date, completed, onButtonClick}) => {
  console.log(text, date, completed);
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between w-100">
        <div>
          <div>{text}</div>
          <small>{date}</small>
        </div>
        <Button 
          className={completed ? 'btn-primary' : 'btn-danger'}
          onClick={onButtonClick}>
          {completed ? '済み' : '未済'}
        </Button>
      </div>
    </ListGroup.Item>
  );
};

Todo.prototype = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Todo;