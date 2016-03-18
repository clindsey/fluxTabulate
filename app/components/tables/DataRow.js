import DataActions from '../../actions/Data';
import React from 'react';

class DataRow extends React.Component {
  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  render () {
    return (
      <tr>
        <td>{this.props.value}</td>
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
    DataActions.removeValue(this.props.id);
  }
}

DataRow.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired
};

export default DataRow;
