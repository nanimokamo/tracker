import { createSelector } from 'reselect';

export const getUsers = (state) => state.users;

export const getCurrentUser = createSelector(
	[getUsers],
	(users) => users.current,
);

export const getCurrentUserId = createSelector(
	[getCurrentUser],
	(user) => user ? user.id : null,
); 

export const getIsAuthenticated = createSelector(
	[getCurrentUser],
	(currentUser) => currentUser ? true : false,
);
