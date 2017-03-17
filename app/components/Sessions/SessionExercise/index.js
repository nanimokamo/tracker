import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SessionExerciseSet from '../SessionExerciseSet';

import { getExerciseById } from 'components/Exercises/store/selectors.js';

const renderSessionExerciseSet = (props, parentProps, i) => {
  return (
    <SessionExerciseSet
      key={i}
      {...props}
      index={i}
      {...parentProps}
    />
  );
};

const SessionExercise = ({ exercise, sets, index, onRemove, onChangeSet, onRemoveSet }) => {
  return (
    <fieldset>
      <legend>{exercise.name} – {exercise.muscleGroup}</legend>
      {sets.length
        ? sets.map((session, i) =>
          renderSessionExerciseSet(session, { exerciseIndex: index, handleChange: onChangeSet, handleRemove: onRemoveSet }, i))
        : null
      }
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onRemove(index);
        }}
      >
        Remove
      </button>
    </fieldset>
  );
};

SessionExercise.propTypes = {
  exercise: React.PropTypes.object,
  sets: React.PropTypes.array,
  index: React.PropTypes.number,
  onRemove: React.PropTypes.func,
  onRemoveSet: React.PropTypes.func,
  onChangeSet: React.PropTypes.func,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  exercise: getExerciseById(props.exerciseId),
});

export default connect(mapStateToProps, null)(SessionExercise);
 
