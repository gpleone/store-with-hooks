import React from 'react';
import { Context } from '../store';

export default props => {
  const { actions } = React.useContext(Context);

  return (
    <button
      onClick={() =>
        actions.removeProject({ payload: { id: props.id, name: props.label } })
      }
    >
      {props.label}
    </button>
  );
};
