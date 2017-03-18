import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Exercises from 'components/Exercises';
import NewExercise from 'components/Exercises/NewExercise';
import Sessions from 'components/Sessions';
import NewSession from 'components/Sessions/NewSession';
import Login from 'components/Users/Login';
import Logout from 'components/Users/Logout';

export const PrivateRoute = ({ component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? React.createElement(component, props)
        : <Redirect to={'/login'} />
    )}
  />
);

export const PublicRoute = ({ component, isAuthenticated, redirectIfLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      redirectIfLoggedIn && isAuthenticated
        ? <Redirect to={'/'} />
        : React.createElement(component, props)
    )}
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: React.PropTypes.bool,
  // component: Re
};

const routes = [
  {
    path: '/',
    component: Sessions,
  },
  {
    path: '/login',
    public: true,
    redirectIfLoggedIn: true,
    component: Login,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/exercises',
    component: Exercises,
  },
  {
    path: '/exercises/new',
    component: NewExercise,
  },
  {
    path: '/sessions',
    component: Sessions,
  },
  {
    path: '/sessions/new',
    component: NewSession,
  },
]

export default routes;
