import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getSessions } from './store/selectors.js';

class Sessions extends React.Component {
  static propTypes = {
    sessions: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { sessions } = this.props;

    return (
      <div>
        Sessions
        {sessions.map(s => {
          return JSON.stringify(s);
        })}
      </div>
    );
  }
}

const mapDispatchToProps = {
  // moveSelectedTabsToWindow,
  // hideWindows: toggleWindowsVisibility,
};

const mapStateToProps = createStructuredSelector({
  sessions: getSessions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
