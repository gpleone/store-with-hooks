import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import useActions from './actions';

const Context = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);

  return (
    <Context.Provider value={{ state, dispatch, actions }}>
      {children}
    </Context.Provider>
  );
};

export { Store as default, Context };
