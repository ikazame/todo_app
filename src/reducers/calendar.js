import * as actionTypes from '../utils/actionTypes';
// import * as C from '../utils/constant';

const now = new Date();
let initialState = {
  year: now.getFullYear(),
  month: now.getMonth()+1
};

const calendar = (state=initialState, action) => {
  switch(action.type) {
  case actionTypes.SET_YEAR_MONTH:
    return {...state, year:action.year, month:action.month};
  default:
    return state;
  }
};

export default calendar;