import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from 'components/shared/List';
import ListItem from 'components/shared/List/ListItem';

import * as DB from 'database';

import { addExercise } from '../store/actions.js';
import { getExercises } from '../store/selectors.js';

const input = (e) => () => ({ [e.target.name]: e.target.value });

class ExercisePicker extends React.Component {
  static propTypes = {
    addExercise: React.PropTypes.func,
    hideDialog: React.PropTypes.func,
    onDone: React.PropTypes.func,
    onCancel:  React.PropTypes.func,
  }

  static contextTypes = {
    dialog: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.createNewExercise = ::this.createNewExercise;
    this.renderExercise = ::this.renderExercise;
    this.onChange = ::this.onChange;
    this.handleClickExercise = ::this.handleClickExercise;
  }

  async createNewExercise(e) {
    e.preventDefault();
    const dbExercise = await DB.push('/exercises', this.state);
    this.props.addExercise(dbExercise);
    this.props.hideDialog('NEW_EXERCISE');
  }

  onChange(e) {
    e.persist();
    this.setState(input(e));
  }

  handleClickExercise(id) {
    this.context.dialog.onDone(id);
  }

  renderExercise(exercise) {
    return (
      <ListItem
        key={exercise.id}
        onClick={() => this.handleClickExercise(exercise.id)}
      >
        {exercise.name}
      </ListItem>
    );
  }

  render() {
    const { exercises } = this.props;

    return (
      <List>
        {exercises.map(this.renderExercise)}
      </List>
    );
  }
}

const mapDispatchToProps = {
  addExercise,
};

const mapStateToProps = createStructuredSelector({
  exercises: getExercises,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePicker);
