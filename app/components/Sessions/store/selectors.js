import { createSelector } from 'reselect';

import { getExercisesById } from 'components/Exercises/store/selectors.js';

export const getSessionsIds = (state) => state.sessions.ids;
export const getSessionsById = (state) => state.sessions.byId;

export const getSessions = createSelector(
	[getSessionsIds, getSessionsById, getExercisesById],
	(ids, session, exercises) => {
		return ids.map(id => {
			return {
				...session[id],
				exercises: session[id].exercises.map(e => {
					return {
						...e,
						...exercises[e.exerciseId],
					}
				}),
			};
		});
	},
);
