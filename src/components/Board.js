import React from 'react';

import { Context } from '../store';
import List from './List';
import Button from './Button';

const Board = () => {
  return (
    <div>
      <Button label="bike" id={1} />
      <Button label="boat" id={2} />
      <Button label="boat" id={2} action="remove_project" />
      <List />
    </div>
  );
};

export default Board;
