import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers';
import {addTodo, toggleTodo, setVisiblityFilter} from './actions';
import * as C from './utils/constant';
import * as actionTypes from './utils/actionTypes';
console.log(C);
console.log(actionTypes.ADD_TODO);

let store = createStore(todo);
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(addTodo('hello,world', '2019-09-11'));
store.dispatch(toggleTodo(1));
// store.dispatch(setVisiblityFilter('SHOW_COMPLETED'));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
