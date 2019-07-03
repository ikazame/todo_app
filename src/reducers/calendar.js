import * as actionTypes from '../utils/actionTypes';
// import * as C from '../utils/constant';
import {formatDate} from '../utils/calendar';

const now = new Date();
let initialState = {
  year: now.getFullYear().toString(),
  month: ('00' + (now.getMonth()+1)).slice(-2),
  selectedDate: formatDate(now)
};

const calendar = (state=initialState, action) => {
  switch(action.type) {
  case actionTypes.SET_YEAR_MONTH:
    return {...state, year:action.year, month:action.month};
  case actionTypes.SET_SELECTED_DATE:
    return {...state, selectedDate: action.selectedDate};
  default:
    return state;
  }
};

export default calendar;