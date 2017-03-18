import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter as Router } from 'react-router-dom';

import * as DB from 'database';

import Tabs from 'components/shared/Tabs';
import DialogManagerComponent from 'components/shared/DialogManager';

import { syncData } from 'store/actions.js';
import {
  setLoggedIn,
  setLoggedOut,
} from 'components/Users/store/actions.js';
import { getIsAuthenticated } from 'components/Users/store/selectors.js';

import routes, { PrivateRoute, PublicRoute } from 'routes.js';

export let DialogManager = undefined;

const TAB_ITEMS = [
  {
    name: 'Sessions',
    link: '/sessions',
  },
  {
    name: 'Exercises',
    link: '/exercises',
  },
];

class App extends Component {
  static propTypes = {
    isAuthenticated: React.PropTypes.bool,
    syncData: React.PropTypes.func,
    setLoggedIn: React.PropTypes.func,
    setLoggedOut: React.PropTypes.func,
  }

  componentDidMount() {
    DB.watchAuthState((user) => {
      if (user) {
        this.props.setLoggedIn(user);
        DB.get(`/users/${user.uid}`).then(this.props.syncData);
      } else {
        console.log('wizlay!');
        this.props.setLoggedOut();
      }
    });
  }

  setDialogManagerRef(el) {
    if (el) DialogManager = el;
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Router>
        <main className="App">
          <Tabs items={TAB_ITEMS} />
          <DialogManagerComponent ref={this.setDialogManagerRef} />
          {isAuthenticated
            ? (
                <div style={{zIndex: 1000, position: 'fixed', bottom: 0, left: 0}}>
                  AUTHENTICATED
                  <Link to="/logout">Logout</Link>
                </div>
              )
            : null}

          <div className="AppContent">
            <div className="AppContent-inner">
              {routes.map((route, i) => {
                const props = {
                  key: i,
                  exact: true,
                  ...route,
                  isAuthenticated,
                };
                return (
                  !route.public
                  ? <PrivateRoute {...props} />
                  : <PublicRoute {...props} />
                );
              })}
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  syncData,
  setLoggedIn,
  setLoggedOut,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: getIsAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
