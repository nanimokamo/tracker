import { combineReducers } from 'redux';

import {
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
} from './constants.js';

const current = (state = null, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.data;
    case SET_LOGGED_OUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  current,
});
