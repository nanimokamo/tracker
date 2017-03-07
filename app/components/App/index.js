import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Header from '../Header';

import routes from '../../routes.js';
// import { keyPressed } from '../../store/actions.js';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends Component {
  static propTypes = {
  }
  
  constructor(props) {
    super(props);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    return (
      <Router>
        <main className="App">
          <Link to="sessions">Sessions</Link>
          <Link to="exercises">Exercises</Link>

          <div className="AppContent">
            <div className="AppContent-inner">
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  // keyPressed,
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
