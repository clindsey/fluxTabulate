import AggregateRow from './AggregateRow';
import React from 'react';

class AggregateList extends React.Component {
  render () {
    if (Object.keys(this.props.aggregateData).length < 1) {
      return null;
    }
    const aggregateData = this.props.aggregateData;
    const dataRows = [];
    for (const value in aggregateData) { // eslint-disable-line guard-for-in
      dataRows.push(
        <AggregateRow
            count={aggregateData[value]}
            id={value}
            key={value}
            value={value}
        />
      );
    }
    return (
      <table className="table table-condensed table-hover">
        <thead>
          <tr>
            <th colSpan="3">{'Aggregate'}</th>
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    );
  }
}

AggregateList.propTypes = {
  aggregateData: React.PropTypes.object.isRequired
};

export default AggregateList;
