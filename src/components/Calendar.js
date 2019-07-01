import React from 'react';
import zeller from '../utils/zeller';
import { connect } from 'react-redux';
import {setYearMonth, setSelectedDate, setVisiblityFilter} from '../actions';
import CalCell from './CalCell';
import * as C from '../utils/constant';

const Calendar = ({year, month, todos, selectedDate, onCalChange, onCellClick}) => {
  console.log('Calendar', year, month);
  let h =zeller(parseInt(year), parseInt(month), 1);
  let cells = [];
  for(let i=0;i<h;i++) cells.push('');
  for(let i=h;i<35;i++) cells.push(i-h+1);
  return (
    <div id="calendar">
      <h2 class="text-center">
        <input type="month"  class="form-control" value={year + '-' + month} 
          onChange={(e) => {
            let yearmonth = e.target.value.split('-');
            onCalChange(yearmonth[0], yearmonth[1]);
          }}
        />
      </h2>
      <div class="cal">
        <div class="cal-row day-of-the-week">
          <div class="cal-cell">日</div>
          <div class="cal-cell">月</div>
          <div class="cal-cell">火</div>
          <div class="cal-cell">水</div>
          <div class="cal-cell">木</div>
          <div class="cal-cell">金</div>
          <div class="cal-cell">土</div>
        </div>
        <div class="cal-row">
          {
            cells.map((day) => (
              <CalCell 
                day={day} 
                todos={todos.filter((todo) => todo.date === year+'-'+month+'-'+day)}
                active={year+'-'+month+'-'+day === selectedDate}
                onClick={() => onCellClick(year, month, day)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

const setStateToProps = (state) => {
  return {
    year: state.calendar.year, 
    month:state.calendar.month,
    todos: state.todos,
    selectedDate: state.calendar.selectedDate
  };
};

const setDispatchToProps = (dispatch) => {
  return {
    onCalChange: (year, month) => dispatch(setYearMonth(year, month)),
    // onCellClickを動かすところからやって
    onCellClick: (year, month, day) => {
      dispatch(setSelectedDate(year + '-' + month + '-' + day));
      dispatch(setVisiblityFilter(C.FILTER.SHOW_DATE));
    }
  };
};

export default connect(
  setStateToProps,
  setDispatchToProps
)(Calendar);