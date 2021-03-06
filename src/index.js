import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
// import {addTodo, toggleTodo, setVisiblityFilter, setYearMonth, setSelectedDate} from './actions';
// import * as C from './utils/constant';

let store = createStore(todo);
// store.dispatch(addTodo('hello,world', '2019-07-01'));
// store.dispatch(addTodo('hello,world', '2019-07-01'));
// store.dispatch(addTodo('hello,world', '2019-07-11'));
// store.dispatch(addTodo('hello,world', '2019-07-11'));
// store.dispatch(toggleTodo(1));
// store.dispatch(toggleTodo(4));
// store.dispatch(setVisiblityFilter(C.FILTER.SHOW_ALL));
// store.dispatch(setYearMonth('2019', '09'));
// store.dispatch(setSelectedDate('2019-01-01'));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
