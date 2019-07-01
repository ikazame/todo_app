import React from 'react';
import {Container} from 'react-bootstrap';
import TodoPanel from './TodoPanel';
// import Calendar from './Calendar';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <TodoPanel />
        {/* <Calendar /> */}
      </Container>
    </div>
  );
};

export default App;
