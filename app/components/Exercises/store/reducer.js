import { combineReducers } from 'redux';

import { ADD_EXERCISE } from './constants.js';

const ids = (state = [], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return [...state, action.data.result];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return { ...state, ...action.data.entities.exercise };
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId,
});
