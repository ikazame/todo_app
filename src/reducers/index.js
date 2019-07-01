import {combineReducers} from 'redux';
import todos from './todos';
import visiblityFilter from './visiblityFilter';
import calendar from './calendar';

const reducer = combineReducers({
  todos,
  visiblityFilter,
  calendar
});

export default reducer;