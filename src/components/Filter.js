import React from 'react';
import * as C from '../utils/constant';
import Link from '../containers/Link';
import {ButtonGroup} from 'react-bootstrap';

const Filter = () => {
  return (
    <ButtonGroup className='todo-filter'>
      <Link filter={C.FILTER.SHOW_ALL}>全件</Link>
      <Link filter={C.FILTER.SHOW_COMPLETED}>完了</Link>
      <Link filter={C.FILTER.SHOW_ACTIVE}>未完</Link>
    </ButtonGroup>
  );
};

export default Filter;