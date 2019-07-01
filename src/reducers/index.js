import {combineReducers} from 'redux';
import todos from './todos';
import visiblityFilter from './visiblityFilter';

const reducer = combineReducers({
  todos,
  visiblityFilter
});

export default reducer;