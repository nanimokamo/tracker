import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { createExercises, createSessions } from './api/bootstrap.js';
import configureStore from './store';

const store = configureStore();
createExercises(store);
// createSessions(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
