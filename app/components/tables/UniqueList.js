import DataRow from './DataRow';
import React from 'react';

class UniqueList extends React.Component {
  render () {
    if (this.props.allData.length < 1) {
      return null;
    }
    const allData = this.props.allData;
    const dataRows = allData.map(
      (datum, i) => {
        let key = ""+i;
        return (
          <DataRow
            id={key}
            key={key}
            value={datum}
          />
        );
    }).reverse();
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
  allData: React.PropTypes.array.isRequired
};

export default UniqueList;
