import { normalize } from 'normalizr';

import { session } from './schema.js';
import {
	ADD_SESSIONS,
	ADD_SESSION,
} from './constants.js';

export const addSessions = (data) => ({
  type: ADD_SESSIONS,
  data: data.map(s => normalize(s, session)),
});

export const addSession = (data) => ({
  type: ADD_SESSION,
  data: normalize(data, session),
});
