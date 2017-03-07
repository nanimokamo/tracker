import { normalize } from 'normalizr';

import { session } from './schema.js';
import { ADD_SESSION } from './constants.js';

export const addSession = (data) => ({
  type: ADD_SESSION,
  data: normalize(data, session),
});
