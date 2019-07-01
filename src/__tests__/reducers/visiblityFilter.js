import visiblityFilter from '../../reducers/visiblityFilter';
import * as C from '../../utils/constant';

describe('todos reducer', () => {
  test('initialStateの確認', () => {
    expect(
      visiblityFilter(undefined, {})
    ).toEqual(C.FILTER.SHOW_ALL);
  });

  test('SET_VISIBLITY_FILTERの確認', () => {
    expect(
      visiblityFilter(undefined, {
        type: 'SET_VISIBLITY_FILTER',
        filter: C.FILTER.SHOW_ALL
      })
    ).toEqual(C.FILTER.SHOW_ALL);
  });
});