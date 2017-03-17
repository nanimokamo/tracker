import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import * as DB from 'database';

import { DialogManager } from 'components/App';
import ExercisePicker from 'components/Exercises/ExercisePicker';
import SessionExercise from '../SessionExercise';

import { addSession } from '../store/actions.js';

// state changes
const input = (e) => () => ({ [e.target.name]: e.target.value });
const inputSet = (e, exerciseIndex, setIndex) => (state) => {
  const path = R.lensPath(['exercises', exerciseIndex, 'sets', setIndex, e.target.name]);
  const newState = R.set(path, parseInt(e.target.value), state);
  return newState;
};
const removeSet = (e, exerciseIndex, setIndex) => (state) => {
  const path = R.lensPath(['exercises', exerciseIndex, 'sets']);
  const newState = R.remove(setIndex, 1, path);

  const newExercisesState = [...state.exercises];
  const newExercisesState2 = newExercisesState[exerciseIndex].sets.filter(i => i !== setIndex);
  return {
    exercises: newExercisesState2,
  }
};
const removeExerciseAtIndex = (i) => (state) => ({ exercises: state.exercises.filter((s, si) => i !== si) });
const addNewExercise = (exerciseId) => (state) => {
  // const path = R.lensPath('exercises');
  // const newState = R.append(path, )
  return {
    exercises: [
      ...state.exercises,
      {
        exerciseId,
        sets: [
          {
            weight: 0,
            reps: 0,
          },
        ],
      },
    ],
  };
};

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
    this.onChange = ::this.onChange;
    this.onChangeSet = ::this.onChangeSet;
    this.onRemoveSet = ::this.onRemoveSet;
    this.onRemoveExercise = ::this.onRemoveExercise;
    this.addExercise = ::this.addExercise;
    this.renderSessionExercise = ::this.renderSessionExercise;
  }

  async addExercise() {
    const exerciseId = await DialogManager.open(ExercisePicker);
    this.setState(addNewExercise(exerciseId));
  }

  async createNewSession(e) {
    e.preventDefault();
    const dbSession = await DB.push('/exercises', this.state);
    this.props.addSession(dbSession);
  }

  onChange(e) {
    e.persist();
    this.setState(input(e));
  }

  onChangeSet(e, exerciseIndex, i) {
    e.persist();
    this.setState(inputSet(e, exerciseIndex, i));
  }

  onRemoveSet(e, exerciseIndex, i) {
    e.persist();
    this.setState(removeSet(e, exerciseIndex, i));
  }

  onRemoveExercise(i) {
    this.setState(removeExerciseAtIndex(i));
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
            onChange={this.onChange}
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
