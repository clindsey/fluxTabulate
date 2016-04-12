import Base from './Base';
import AsterDataSeries from './AsterDataSeries';
import React from 'react';

class AsterPlot extends React.Component {
  render () {
    return (
      <Base
          height={this.props.height}
          width={this.props.width}
      >
        <AsterDataSeries
            data={this.props.allData}
            height={this.props.height}
            width={this.props.width}
        />
      </Base>
    );
  }
}

AsterPlot.propTypes = {
  allData: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default AsterPlot;
