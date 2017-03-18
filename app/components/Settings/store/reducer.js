import { combineReducers } from 'redux';

import {
  SET_WEIGHT_UNIT,
} from './constants.js';

const weightUnit = (state = 'kg', action) => {
  switch (action.type) {
    case SET_WEIGHT_UNIT:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  weightUnit,
});
