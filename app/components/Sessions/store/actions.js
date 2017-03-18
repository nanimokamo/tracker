import { normalize } from 'normalizr';

import { session } from './schema.js';
import {
	ADD_SESSIONS,
	ADD_SESSION,
} from './constants.js';

export const addSessions = (data) => {
	const ids = [];
	const newData = Object.keys(data).reduce((state, key) => {
		ids.push(key);
		return {
			...state,
			[key]: {
				id: key,
				...data[key]
			}
		};
	}, {});

	return {
		type: ADD_SESSIONS,
		data: {
			ids,
			byId: newData,
		},
	};
};

export const addSession = (data) => ({
	type: ADD_SESSION,
  data: normalize(data, session),
});
