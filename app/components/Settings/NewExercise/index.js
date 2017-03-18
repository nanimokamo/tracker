import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'components/shared/DialogManager/Dialog';

import * as DB from 'database';

import { addExercise } from '../store/actions.js';

const MUSCLE_GROUPS = [
  'arms',
  'legs',
  'shoulders',
  'chest',
  'back',
];

const input = (e) => () => ({ [e.target.name]: e.target.value });

class NewExercise extends React.Component {
  static propTypes = {
    addExercise: React.PropTypes.func,
  }

  state = {
    name: '',
    muscleGroup: MUSCLE_GROUPS[0],
  }

  constructor(props) {
    super(props);
    this.createNewExercise = this.createNewExercise.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async createNewExercise(e) {
    e.preventDefault();
    const dbExercise = await DB.push('/exercises', this.state);
    this.props.addExercise(dbExercise);
  }

  onChange(e) {
    e.persist();
    this.setState(input(e));
  }

  render() {
    return (
      <Dialog open>
        <form onSubmit={this.createNewExercise}>
          <h1>New exercise</h1>
          <input type="text" name="name" onChange={this.onChange} />
          <select name="muscleGroup" onChange={this.onChange}>
            {MUSCLE_GROUPS.map(m => {
              return <option key={m} value={m}>{m}</option>;
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </Dialog>
    );
  }
}

const mapDispatchToProps = {
  addExercise,
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NewExercise);
