import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as DB from 'database';

import Tabs from 'components/shared/Tabs';
import DialogManagerComponent from 'components/shared/DialogManager';

import { syncData } from 'store/actions.js';

import routes from '../../routes.js';

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
    syncData: React.PropTypes.func,
  }

  componentDidMount() {
    DB.get('/')
      .then(this.props.syncData);
  }

  setDialogManagerRef(el) {
    if (el) DialogManager = el;
  }

  render() {
    return (
      <Router>
        <main className="App">
          <Tabs items={TAB_ITEMS} />
          <DialogManagerComponent ref={this.setDialogManagerRef} />

          <div className="AppContent">
            <div className="AppContent-inner">
              {routes.map((route, i) => (
                <Route
                  key={i}
                  exact
                  {...route}
                />
              ))}
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  syncData,
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
