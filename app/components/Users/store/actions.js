import {
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
} from './constants.js';

export const setLoggedIn = (data) => ({
  type: SET_LOGGED_IN,
  data: {
    id: data.uid,
    avatarUrl: data.photoURL,
  },
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});
