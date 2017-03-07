import { combineReducers } from 'redux';

import { ADD_SESSION } from './constants.js';

const ids = (state = [], action) => {
  switch (action.type) {
    case ADD_SESSION:
      return [...state, action.data.result];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return { ...state, ...action.data.entities.session };
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId,
});
