import React from 'react';

import List from './List';
import Button from './Button';

const Board = () => {
  return (
    <div className="Board">
      <div>
        <span>Add:</span>
        <Button label="bike" />
        <Button label="boat" />
      </div>
      {/* <div>
        <span>Remove:</span>
        <Button label="boat" action="remove_project" />
      </div> */}
      <List />
    </div>
  );
};

export default Board;
