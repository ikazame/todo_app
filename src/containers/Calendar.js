import React from 'react';
import PropTypes from 'prop-types';
import {zeller, getMonthDays} from '../utils/calendar';
import { connect } from 'react-redux';
import {setYearMonth, setSelectedDate, setVisiblityFilter} from '../actions';
import CalCell from '../components/CalCell';
import * as C from '../utils/constant';

const Calendar = ({year, month, todos, selectedDate, onCalChange, onCellClick}) => {
  let h =zeller(parseInt(year), parseInt(month), 1);
  let monthDays = getMonthDays(year, month);
  let cells = [];
  for(let i=0;i<h;i++) cells.push('');
  for(let i=h;i<monthDays;i++) cells.push(i-h+1);
  for(let i=monthDays;i<35;i++) cells.push('');
  
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
            cells.map((day) => {
              return (<CalCell 
                day={day} 
                todos={todos.filter((todo) => todo.date === year+'-'+month+'-'+('0'+day).slice(-2))}
                active={year+'-'+month+'-'+('0'+day).slice(-2) === selectedDate}
                onClick={() => onCellClick(year, month, ('0'+day).slice(-2))}
              />);
            })
          }
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  year: PropTypes.string.isRequired, 
  month: PropTypes.string.isRequired, 
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired, 
  selectedDate: PropTypes.string.isRequired,
  onCalChange: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired
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