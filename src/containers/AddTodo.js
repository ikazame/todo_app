import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {Button, Card, Form, Col} from 'react-bootstrap';

const AddTodo = ({onAddClick}) => {
  let textNode, dateNode;

  return (
    <Card className="todo-card">
      <Card.Body>
        <Form>
          <Form.Group>
            <input type="text" className="form-control" placeholder="新規TODOを入力" 
              ref={(node) => { textNode = node; }}
            />
          </Form.Group>
          <Form.Row className="align-items-center">
            <Col>
              <Form.Check>
                <Form.Check  type="checkbox" id="dateCheckBox" label="日時を指定" />
              </Form.Check>
            </Col>
            <Col>
              <Form.Control type="date"
                ref={(node) => { dateNode = node; }}
              />
            </Col>
            <Col>
              <Button onClick={() => {
                if(!textNode.value || !dateNode.value) {
                  console.log('returnします');
                  return;
                }
                onAddClick(textNode.value, dateNode.value);
              }}>追加</Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {state: state};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (text, date) => {
      dispatch(addTodo(text, date));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);