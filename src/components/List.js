import React from 'react';

import { Context } from '../store';

const List = props => {
  const { state } = React.useContext(Context);

  return (
    <ul>
      {state.projects.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
