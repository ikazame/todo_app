import * as actions from '../actions';

describe('todo actions', () => {
  test('addTodoがADD_TODO actionを作成する', () => {
    expect(actions.addTodo('Use Redux', '2019-01-01')).toEqual({
      type: 'ADD_TODO',
      id: 1,
      text: 'Use Redux',
      date: '2019-01-01'
    });
  });

  test('toggleTodoがTOGGLE_TODO actionを作成する', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    });
  });

  test('setVisiblityFilterがSET_VISIBLITY_FILTER actionを作成する', () => {
    expect(actions.setVisiblityFilter(0)).toEqual({
      type: 'SET_VISIBLITY_FILTER',
      filter: 0
    });
  });
  
  test('setYearMonthがSET_YEAR_MONTH actionを作成する', () => {
    expect(actions.setYearMonth('2019', '01')).toEqual({
      type: 'SET_YEAR_MONTH',
      year: '2019',
      month: '01'
    });
  });

  test('setSelectedDateがSET_SELECTED_DATE actionを作成する', () => {
    expect(actions.setSelectedDate('2019-12-24')).toEqual({
      type: 'SET_SELECTED_DATE',
      selectedDate: '2019-12-24'
    });
  });
});