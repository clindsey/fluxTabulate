import DataRow from './DataRow';
import React from 'react';

class UniqueList extends React.Component {
  render () {
    if (Object.keys(this.props.allData).length < 1) {
      return null;
    }
    const allData = this.props.allData;
    const dataRows = [];
    for (const key in allData) { // eslint-disable-line guard-for-in
      dataRows.push(
        <DataRow
            id={key}
            key={key}
            value={allData[key].value}
        />
      );
    }
    return (
      <table className="table table-condensed table-hover">
        <thead>
          <tr>
            <th colSpan="2">{'Individual'}</th>
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    );
  }
}

UniqueList.propTypes = {
  allData: React.PropTypes.object.isRequired
};

export default UniqueList;
