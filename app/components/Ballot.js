import React from 'react';
import DataActions from '../actions/Data';

export default class Ballot extends React.Component {
  _onClick (event) {
    DataActions.add(event.currentTarget.innerHTML);
  }

  render () {
    return (
      <div
          className="btn-group"
          role="group"
      >
        <div
            className="btn-group"
            role="group"
        >
          <button
              type="button"
              className="btn btn-primary"
              onClick={this._onClick}
          >{'Iron Man'}</button>
        </div>
        <div
            className="btn-group"
            role="group"
        >
          <button
              type="button"
              className="btn btn-primary"
              onClick={this._onClick}
          >{'Black Panther'}</button>
        </div>
        <div
            className="btn-group"
            role="group"
        >
          <button
              type="button"
              className="btn btn-primary"
              onClick={this._onClick}
          >{'The Hulk'}</button>
        </div>
      </div>
    );
  }
}
