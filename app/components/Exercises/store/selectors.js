import { createSelector } from 'reselect';

export const getExercisesIds = (state) => state.exercises.ids;
export const getExercisesById = (state) => state.exercises.byId;

export const getExercises = createSelector(
	[getExercisesIds, getExercisesById],
	(ids, exercises) => ids.map(id => exercises[id]),
);

export const getExerciseById = (id) => createSelector(
	[getExercisesById],
	(exercises) => exercises[id],
);
