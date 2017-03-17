import { combineReducers } from 'redux';

import {
  ADD_EXERCISES,
  ADD_EXERCISE,
} from './constants.js';

const ids = (state = [], action) => {
  switch (action.type) {
    case ADD_EXERCISES:
      return action.data.ids;
    case ADD_EXERCISE:
      return [...state, action.data.result];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXERCISES:
      return action.data.byId;
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
