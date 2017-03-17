import { addSessions } from 'components/Sessions/store/actions.js';
import { addExercises } from 'components/Exercises/store/actions.js';

export const syncData = (data) => (dispatch) => {
	if (data && data.sessions) dispatch(addSessions(data.sessions));
	if (data && data.exercises) dispatch(addExercises(data.exercises));
};
