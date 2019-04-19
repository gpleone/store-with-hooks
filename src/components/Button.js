import React, { useContext } from 'react';
import { Context } from '../store';

export default props => {
  const { actions } = useContext(Context);

  return (
    <button
      onClick={() => {
        actions.addProject({
          payload: props.label
        });
      }}
    >
      {props.label}
    </button>
  );
};
