import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import FloatingAction from 'components/shared/FloatingAction';

import { getSessions } from './store/selectors.js';

class Sessions extends React.Component {
  static propTypes = {
    sessions: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.navigateToNewSession = ::this.navigateToNewSession;
  }

  navigateToNewSession() {
    this.props.history.push('/sessions/new');
  }

  render() {
    const { sessions } = this.props;

    return (
      <div>
        Sessions
        {sessions.map(s => {
          return JSON.stringify(s);
        })}

        <FloatingAction
          icon="add"
          onClick={this.navigateToNewSession}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = createStructuredSelector({
  sessions: getSessions,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sessions));
