import todos from '../../reducers/todos';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0,
        date: '2019-01-01'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        date: '2019-01-01'
      }
    ]);

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
          date: '2019-01-01'
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1,
        date: '2019-01-02'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        date: '2019-01-01'
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
        date: '2019-01-02'
      }
    ]);

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
          date: '2019-01-01'
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1,
          date: '2019-01-02'
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests',
        id: 2,
        date: '2019-01-03'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
        date: '2019-01-01'
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1,
        date: '2019-01-02'
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2,
        date: '2019-01-03'
      }
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1,
          date: '2019-01-01'
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0,
          date: '2019-01-02'
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
        date: '2019-01-01'
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0,
        date: '2019-01-02'
      }
    ]);
  });
});
