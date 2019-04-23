import React from 'react';

import { Context } from '../store';

const List = () => {
  const { actions, state } = React.useContext(Context);

  return (
    <div>
      {state.projects &&
        state.projects.map(item => (
          <p key={item.id}>
            {item.name} {item.id}
            <button onClick={() => actions.removeProject({ payload: item.id })}>
              remove me
            </button>
          </p>
        ))}
    </div>
  );
};

export default List;
