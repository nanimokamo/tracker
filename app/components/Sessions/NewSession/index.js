import React from 'react';
import { connect } from 'react-redux';

import { DialogManager } from 'components/App';
import ExercisePicker from 'components/Exercises/ExercisePicker';
import SessionExercise from '../SessionExercise';

import * as DB from 'database';

import * as state from './state.js';
import { addSession } from '../store/actions.js';

class NewSession extends React.Component {
  static propTypes = {
    addSession: React.PropTypes.func,
    showDialog: React.PropTypes.func,
  }

  state = {
    datetime: new Date().getTime(),
    exercises: [],
  }

  constructor(props) {
    super(props);
    this.createNewSession = ::this.createNewSession;
    this.onChangeSession = ::this.onChangeSession;
    
    this.addExercise = ::this.addExercise;
    this.onRemoveExercise = ::this.onRemoveExercise;

    this.onAddSet = ::this.onAddSet;
    this.onChangeSet = ::this.onChangeSet;
    this.onRemoveSet = ::this.onRemoveSet;
    
    this.renderSessionExercise = ::this.renderSessionExercise;
  }

  async addExercise() {
    const exerciseId = await DialogManager.open(ExercisePicker);
    this.setState(state.addExercise(exerciseId));
  }

  async createNewSession(e) {
    e.preventDefault();
    const dbSession = await DB.push('/sessions', this.state);
    this.props.addSession(dbSession);
  }

  onChangeSession(e) {
    e.persist();
    this.setState(state.updateExercise(e));
  }

  onRemoveExercise(i) {
    this.setState(state.removeExercise(i));
  }

  onAddSet(e, exerciseIndex) {
    this.setState(state.addSet(exerciseIndex));
  }

  onChangeSet(e, exerciseIndex, i) {
    e.persist();
    this.setState(state.updateSet(e, exerciseIndex, i));
  }

  onRemoveSet(e, exerciseIndex, i) {
    e.persist();
    this.setState(state.removeSet(exerciseIndex, i));
  }

  renderSessionExercise(exercise, i) {
    return (
      <SessionExercise
        key={i}
        {...exercise}
        index={i}
        onRemove={this.onRemoveExercise}
        onChangeSet={this.onChangeSet}
        onRemoveSet={this.onRemoveSet}
        onAddSet={this.onAddSet}
      />
    );
  }

  render() {
    const { datetime, exercises } = this.state;

    return (
      <form onSubmit={this.createNewSession}>
        <fieldset>
          <input
            type="text"
            name="datetime"
            value={datetime}
            onChange={this.onChangeSession}
          />

          {exercises.map(this.renderSessionExercise)}

          <button type="button" onClick={this.addExercise}>Add exercise</button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addSession,
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NewSession);
