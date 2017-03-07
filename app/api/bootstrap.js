import * as exercisesActions from 'components/Exercises/store/actions.js';
import * as sessionsActions from 'components/Sessions/store/actions.js';
import api from './index.js';

const EXERCISES = [
	{
		name: 'Bicep curls',
		muscleGroup: 'arms',
	},
	{
		name: 'Leg extensions',
		muscleGroup: 'legs',
	},
];

export const createExercises = (store) => {
	EXERCISES.forEach(async (exercise) => {
		const exerciseData = await api.call('exercises/add', exercise);
		store.dispatch(exercisesActions.addExercise(exerciseData));
	});
};

const SESSIONS = [
	{
		datetime: new Date().getTime(),
		exercises: [
			// {
			// 	exerciseId: 1,
			// 	reps: 3,
			// 	weight: 30,
			// },
		]
	},
];

export const createSessions = (store) => {
	SESSIONS.forEach(async (session) => {
		const sessionData = await api.call('sessions/add', session);
		store.dispatch(sessionsActions.addSession(sessionData));
	});
};
