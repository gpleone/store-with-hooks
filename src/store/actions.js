const types = {
  ADD_PROJECT: '[projects] ADD',
  REMOVE_PROJECT: '[projects] REMOVE'
};

const reducer = dispatch => {
  const actions = {
    addProject: ({ payload, meta }) => {
      dispatch({ type: types.ADD_PROJECT, payload, meta });
    },
    removeProject: ({ payload, meta }) => {
      dispatch({ type: types.REMOVE_PROJECT, payload, meta });
    }
  };
  return actions;
};

export { reducer as default, types };
