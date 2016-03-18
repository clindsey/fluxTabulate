import React from 'react';
import DataActions from '../actions/Data';

export default class Ballot extends React.Component {
  _onClick (event) {
    DataActions.add(event.currentTarget.innerHTML);
  }

  render () {
    return (
      <div>
        <button
            className="btn btn-primary"
            onClick={this._onClick}
        >{'Flash'}</button>
        <button
            className="btn btn-primary"
            onClick={this._onClick}
        >{'Batman'}</button>
        <button
            className="btn btn-primary"
            onClick={this._onClick}
        >{'Superman'}</button>
      </div>
    );
  }
}
