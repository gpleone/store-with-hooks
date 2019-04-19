import React from 'react';
import { Context } from '../store';

export default props => {
  const { actions, dispatch } = React.useContext(Context);

  return (
    // <button
    //   onClick={() =>
    //     dispatch({
    //       type: props.action || 'add_project',
    //       payload: { id: props.id, name: props.label }
    //     })
    //   }
    // >
    //   {props.label}
    // </button>
    <button
      onClick={() => {
        props.action
          ? actions.removeProject({ payload: { id: props.id } })
          : actions.addProject({
              payload: { id: props.id, name: props.label }
            });
      }}
    >
      {props.label}
    </button>
  );
};
