import calendar from '../../reducers/calendar';
import * as C from '../../utils/constant';

describe('todos reducer', () => {
  test('initialStateの確認', () => {
    let state = calendar(undefined, {});
    expect(state.month).toMatch(/[01][0-9]/);
    expect(state.year).toMatch(/\d{1,4}/);
    expect(state.selectedDate).toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  test('SET_YEAR_MONTH の確認', () => {
    expect(calendar({year: '1999', month: '01', selectedDate: '2019-02-02'}, {
      type: 'SET_YEAR_MONTH',
      year: '2019',
      month: '01'
    })).toEqual({
      year: '2019',
      month: '01',
      selectedDate: '2019-02-02'
    });
  });

  test('SET_SELECTED_DATE の確認', () => {
    expect(calendar({year: '1999', month: '01', selectedDate: '2019-02-02'}, {
      type: 'SET_SELECTED_DATE',
      selectedDate: '1999-09-09'
    })).toEqual({
      year: '1999',
      month: '01',
      selectedDate: '1999-09-09'
    });
  });
});