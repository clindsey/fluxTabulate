import Base from './Base';
import PieDataSeries from './PieDataSeries';
import React from 'react';

class PieChart extends React.Component {
  render () {
    return (
      <Base
          height={this.props.height}
          width={this.props.width}
      >
        <PieDataSeries
            data={this.props.aggregateData}
            height={this.props.height}
            width={this.props.width}
        />
      </Base>
    );
  }
}

PieChart.propTypes = {
  aggregateData: React.PropTypes.object.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default PieChart;
