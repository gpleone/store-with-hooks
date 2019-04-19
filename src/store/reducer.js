import { useReducer } from 'react';

import { types } from './actions';

const initialState = {
  projects: [{ id: 0, name: 'car' }]
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case types.ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case types.REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(p => p.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export { reducer, initialState };
