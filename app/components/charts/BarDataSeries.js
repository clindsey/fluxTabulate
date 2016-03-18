import React from 'react';
import Bar from './Bar';
import colorMaker from '../../colorMaker';
import d3 from 'd3';

class BarDataSeries extends React.Component {
  render () {
    const keys = Object.keys(this.props.data);
    const data = [];
    for (const key of keys) {
      data.push(this.props.data[key]);
    }
    const yScale = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, this.props.height]);
    const xScale = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, this.props.width], 0.05);
    const props = this.props;
    const bars = data.map((point, index) => {
      const color = colorMaker(keys[index]);
      return (
        <Bar
            availableHeight={props.height}
            color={color}
            height={yScale(point)}
            key={index}
            label={keys[index]}
            offset={xScale(index)}
            width={xScale.rangeBand()}
        />
      );
    });
    return (
      <g>{bars}</g>
    );
  }
}

BarDataSeries.propTypes = {
  data: React.PropTypes.object.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default BarDataSeries;
