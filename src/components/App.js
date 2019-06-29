import React from 'react';
import {Container} from 'react-bootstrap';
import Todo from './Todo';
// import Calendar from './Calendar';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Todo />
        {/* <Calendar /> */}
      </Container>
    </div>
  );
};

export default App;
