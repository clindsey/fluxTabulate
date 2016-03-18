import React from 'react';
import DataActions from '../actions/Data';

export default class DataInsert extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <input
              autoFocus
              className="form-control"
              onChange={this._onChange}
              placeholder="Add New Value"
              type="text"
              value={this.state.value}
          />
        </div>
      </form>
    );
  }

  _onChange (event) {
    this.setState({ // eslint-disable-line react/no-set-state
      value: event.target.value
    });
  }

  _onSubmit (event) {
    event.preventDefault();
    this._save();
  }

  _save () {
    DataActions.add(this.state.value);
    this.setState({ // eslint-disable-line react/no-set-state
      value: ''
    });
  }
}
