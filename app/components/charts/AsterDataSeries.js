import AsterSlice from './AsterSlice';
import colorMaker from '../../colorMaker';
import React from 'react';
import d3 from 'd3';

class AsterDataSeries extends React.Component {
  render () {
    const pie = d3.layout.pie().sort(null).value(d=>d.score),
    
    width = this.props.width,
    height = this.props.height,

    outerRadius = Math.min(width, height) / 2,
    innerRadius = 0.2 * outerRadius,

    data = [];
    let datum = {};

    this.props.data.forEach((value, i) =>

      value !== datum.value ? // continuous
      
        data.push(datum = {
            value: value,
            id: i,
            order: i,
            score: 1
          }):
          datum.score++ // count continuity
    );

    const slices = pie(data).map((point, i) => {
      const label = point.data.value;
      return (
        <AsterSlice
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            point={point}
            label={label}
            color={colorMaker(label)}
            score={point.data.score}
            key={i.toString()}
        />
      );
    });
    return (
      <g transform={'translate(' + (width / 2) + ', ' + (height / 2) + ')'}>
        {slices}
        <text
            className="aster-count"
            dy="0.35em"
            textAnchor="middle"
          >
          {this.props.data.length}
        </text>
      </g>
    );
  }
}

AsterDataSeries.propTypes = {
  data: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default AsterDataSeries;
