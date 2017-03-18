import R from 'ramda';

// DEFAULT STATES
export const defaultExerciseItem = (exerciseId) => ({ exerciseId, datetime: new Date().getTime(), sets: [defaultSetItem()] });
export const defaultSetItem = () => ({ reps: 0, weight: 0 });

// STATE CHANGES
export const updateSession = (e) => () => ({ [e.target.name]: e.target.value });

export const addExercise = (exerciseId) => (state) => {
  const path = R.lensPath(['exercises']);
  return R.over(path, (s) => R.append(defaultExerciseItem(exerciseId), s), state);
};

export const removeExercise = (index) => (state) => {
  const path = R.lensPath(['exercises']);
  return R.set(path, (s) => R.remove(index, 1, s), state);
};

export const addSet = (exerciseIndex) => (state) => {
  const path = R.lensPath(['exercises', exerciseIndex, 'sets']);
  return R.over(path, (s) => R.append(defaultSetItem(), s), state);
};

export const updateSet = (e, exerciseIndex, setIndex) => (state) => {
  const path = R.lensPath(['exercises', exerciseIndex, 'sets', setIndex, e.target.name]);
  return R.set(path, parseInt(e.target.value), state);
};

export const removeSet = (exerciseIndex, setIndex) => (state) => {
  const path = R.lensPath(['exercises', exerciseIndex, 'sets']);
  return R.over(path, (s) => R.remove(setIndex, 1, s), state);
};
