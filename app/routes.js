import Exercises from './components/Exercises';
import Sessions from './components/Sessions';
// import NewSession from './components/Sessions/new.js';

const routes = [
  {
    path: '/',
    component: Sessions,
    // component: Exercises,
  },
  {
    path: '/exercises',
    component: Exercises,
  },
  {
    path: '/sessions',
    component: Sessions,
    // routes: [
    //   { path: '/tacos/bus',
    //     component: Bus
    //   },
    //   { path: '/tacos/cart',
    //     component: Cart
    //   },
    // ],
  }
]

export default routes;
