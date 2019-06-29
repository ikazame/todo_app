import React from 'react';
import {Button, ListGroup, ButtonGroup, Card, Form, Col} from 'react-bootstrap';

const Todo = () => {
  return (
    <div id="todo">
      <ListGroup className="todo-list">
        <ButtonGroup>
          <Button className='btn-secondary'>全件</Button>
          <Button className='btn-secondary' active={true}>完了</Button>
          <Button className='btn-secondary'>未完</Button>
        </ButtonGroup>
        <ListGroup.Item>
          <div class="d-flex justify-content-between w-100">
            <div>なにかのTODO1</div>
            <small>2019/06/06</small>
            <div class="form-check">
              <input class="form-check-input position-static" type="checkbox" />
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>なにかのTODO2</ListGroup.Item>
        <ListGroup.Item>なにかのTODO3</ListGroup.Item>
      </ListGroup>
      <Card className="todo-card">
        <Card.Body>
          <Form>
            <Form.Group>
              <input type="text" class="form-control" placeholder="新規TODOを入力" />
            </Form.Group>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Check>
                  {/* <input class="form-check-input" type="checkbox" id="check5" />
                  <label class="form-check-label" for="check5">日時を指定</label> */}
                  <Form.Check  type="checkbox" id="dateCheckBox" label="日時を指定" />
                </Form.Check>
              </Col>
              <Col>
                {/* <input type="date" class="form-control mb-2" placeholder="新規TODOを入力" /> */}
                <Form.Control type="date" placeholder="新規TODOを入力" />
              </Col>
              <Col>
                {/* <button type="submit" class="btn btn-primary mb-2">追加</button> */}
                <Button type="submit">追加</Button>
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Todo;