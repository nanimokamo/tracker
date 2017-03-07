import { normalize } from 'normalizr';

import { exercise } from './schema.js';
import { ADD_EXERCISE } from './constants.js';

export const addExercise = (data) => ({
  type: ADD_EXERCISE,
  data: normalize(data, exercise),
});
