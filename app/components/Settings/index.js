import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FloatingAction from 'components/shared/FloatingAction';
import List from 'components/shared/List';
import ListItem from 'components/shared/List/ListItem';

import { getExercises } from './store/selectors.js';

class Settings extends React.Component {
  static propTypes = {
    exercises: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.showAddExerciseDialog = this.showAddExerciseDialog.bind(this);
  }

  showAddExerciseDialog() {
    // this.props.showDialog('NEW_EXERCISE');
  }

  render() {
    const { exercises } = this.props;

    return (
      <div>
        <List>
          {exercises.map((e, i) => {
            return <ListItem key={i} >{e.name} - {e.muscleGroup}</ListItem>;
          })}
        </List>

        <FloatingAction
          icon="add"
          onClick={this.showAddExerciseDialog}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = createStructuredSelector({
  exercises: getExercises,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
