import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getExercises } from './store/selectors.js';

class Exercises extends React.Component {
  static propTypes = {
    exercises: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { exercises } = this.props;

    return (
      <div>
        Exercises:
        {exercises.map(e => {
          return e.name;
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
  exercises: getExercises,
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);
