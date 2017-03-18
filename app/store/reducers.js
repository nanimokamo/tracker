import { combineReducers } from 'redux';
import sessions from 'components/Sessions/store/reducer.js';
import exercises from 'components/Exercises/store/reducer.js';
import settings from 'components/Settings/store/reducer.js';

const createReducer = () => {
  return combineReducers({
    sessions,
    exercises,
    settings,
  });
};

export default createReducer;
