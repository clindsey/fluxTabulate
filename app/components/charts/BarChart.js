import React from 'react';
import Base from './Base';
import BarDataSeries from './BarDataSeries';

class BarChart extends React.Component {
  render () {
    return (
      <Base
          height={this.props.height}
          width={this.props.width}
      >
        <BarDataSeries
            data={this.props.aggregateData}
            height={this.props.height}
            width={this.props.width}
        />
      </Base>
    );
  }
}

BarChart.propTypes = {
  aggregateData: React.PropTypes.object.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default BarChart;
