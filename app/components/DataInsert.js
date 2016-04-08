import React from 'react';
import DataActions from '../actions/Data';

export default class DataInsert extends React.Component {
  constructor (props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <input
              autoFocus
              className="form-control"
              placeholder="Add New Value"
              ref="searchInput"
              type="text"
          />
        </div>
      </form>
    );
  }

  _onSubmit (event) {
    event.preventDefault();
    DataActions.add(this.refs.searchInput.value);
    this.setState({ // eslint-disable-line react/no-set-state
      value: ''
    });
  }
}
