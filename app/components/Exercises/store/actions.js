import { normalize } from 'normalizr';

import { exercise } from './schema.js';
import {
	ADD_EXERCISES,
	ADD_EXERCISE,
} from './constants.js';

export const addExercises = (data) => {
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
		type: ADD_EXERCISES,
		data: {
			ids,
			byId: newData,
		},
	};
};

export const addExercise = (data) => ({
  type: ADD_EXERCISE,
  data: normalize(data, exercise),
});
