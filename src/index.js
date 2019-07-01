import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import {addTodo, toggleTodo, setVisiblityFilter, setYearMonth, setSelectedDate} from './actions';
import * as C from './utils/constant';
import * as actionTypes from './utils/actionTypes';
import zeller from './utils/zeller';
console.log(C);
console.log(actionTypes.ADD_TODO);
console.log(zeller(2019, 7, 1));

let store = createStore(todo);
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisiblityFilter(C.FILTER.SHOW_ALL));
store.dispatch(setYearMonth(2019, 10));
store.dispatch(setSelectedDate('2019-01-01'));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
