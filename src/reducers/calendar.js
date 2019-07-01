import * as actionTypes from '../utils/actionTypes';
// import * as C from '../utils/constant';

function formatDate(date){
  var y = date.getFullYear();
  var m = ('00' + (date.getMonth()+1)).slice(-2);
  var d = ('00' + date.getDate()).slice(-2);
  return y + '-' + m + '-' + d;
}

const now = new Date();
let initialState = {
  year: now.getFullYear(),
  month: now.getMonth()+1,
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