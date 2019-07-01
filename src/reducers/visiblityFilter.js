import * as actionTypes from '../utils/actionTypes';
import * as C from '../utils/constant';

const visiblityFilter = (state=C.FILTER.SHOW_ALL, action) => {
  switch(action.type) {
  case actionTypes.SET_VISIBLITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

export default visiblityFilter;