import Exercises from './components/Exercises';
import NewExercise from './components/Exercises/NewExercise';
import Sessions from './components/Sessions';
import NewSession from './components/Sessions/NewSession';

const routes = [
  {
    path: '/',
    component: Sessions,
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
