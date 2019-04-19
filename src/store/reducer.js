// import { useReducer } from 'react';
import { types } from './actions';
import { handleActions } from 'redux-actions';

const initialState = {
  projects: []
};

const add = (state, action) => ({
  ...state,
  projects: [...state.projects, { id: Math.random(), name: action.payload }]
});

const remove = (state, action) => ({
  ...state,
  projects: state.projects.filter(p => p.id !== action.payload)
});

const reducer = handleActions(
  {
    [types.ADD_PROJECT]: add,
    [types.REMOVE_PROJECT]: remove
  },
  initialState
);

export { reducer, initialState };
