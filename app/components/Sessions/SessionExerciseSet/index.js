import React from 'react';

const SessionExerciseSet = ({ weight, reps, handleChange, handleRemove, exerciseIndex, index }) => {
  return (
    <fieldset>
      <legend>Set</legend>
      Weight: <input type="number" name="weight" onChange={(e) => handleChange(e, exerciseIndex, index)} value={weight} />
      Reps: <input type="number" name="reps" onChange={(e) => handleChange(e, exerciseIndex, index)} value={reps} />
      <button type="button" onClick={(e) => handleRemove(e, exerciseIndex, index)}>Remove</button>
    </fieldset>
  );
};

SessionExerciseSet.propTypes = {
  weight: React.PropTypes.number,
  reps: React.PropTypes.number,
  handleChange: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
  exerciseIndex: React.PropTypes.number,
  index: React.PropTypes.number,
};

export default SessionExerciseSet;
