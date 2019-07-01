import React from 'react';
import zeller from '../utils/zeller';
import { connect } from 'react-redux';
import {setYearMonth} from '../actions';

const Calendar = ({year, month, onCalChange}) => {
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
            cells.map((cell) => (
              <div className='cal-cell'>{cell}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const setStateToProps = (state) => {
  return {year: state.calendar.year, month:state.calendar.month};
};

const setDispatchToProps = (dispatch) => {
  return {
    onCalChange: (year, month) => dispatch(setYearMonth(year, month))
  };
};

export default connect(
  setStateToProps,
  setDispatchToProps
)(Calendar);