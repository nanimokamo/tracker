import { combineReducers } from 'redux';
import sessions from 'components/Sessions/store/reducer.js';
import exercises from 'components/Exercises/store/reducer.js';
import users from 'components/Users/store/reducer.js';
import settings from 'components/Settings/store/reducer.js';

const createReducer = () => {
  return combineReducers({
    sessions,
    exercises,
    users,
    settings,
  });
};

export default createReducer;
