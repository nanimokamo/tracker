import generateId from 'uuid/v1';

const STORE = {
  sessions: [],
  exercises: [],
};

const api = {
  call(endpoint, data) {
    return ENDPOINTS[endpoint](data);
  },

  addSession(data) {
    const session = {
      id: generateId(),
      datetime: data.datetime,
      exercises: data.exercises.map(exercise => {
        return {
          id: generateId(),
          ...exercise,
        };
      }),
    };
    STORE.sessions.push(session);
    return Promise.resolve(session);
  },

  addExercise(data) {
    const exercise = {
      id: generateId(),
      ...data,
    };
    STORE.exercises.push(exercise);
    return Promise.resolve(exercise);
  },
};

const ENDPOINTS = {
  'sessions/add': api.addSession,
  'exercises/add': api.addExercise,
};

export default api;
