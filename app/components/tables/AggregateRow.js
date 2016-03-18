import DataActions from '../../actions/Data';
import React from 'react';

class AggregateRow extends React.Component {
  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  render () {
    return (
      <tr>
        <td>{this.props.value}</td>
        <td>{this.props.count}</td>
        <td>
          <button
              className="btn btn-link"
              onClick={this._onClick}
          >{'remove'}</button>
        </td>
      </tr>
    );
  }

  _onClick () {
    DataActions.removeAggregates(this.props.value);
  }
}

AggregateRow.propTypes = {
  count: React.PropTypes.number.isRequired,
  value: React.PropTypes.any.isRequired
};

export default AggregateRow;
