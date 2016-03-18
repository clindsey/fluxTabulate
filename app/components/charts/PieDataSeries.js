import PieSlice from './PieSlice';
import colorMaker from '../../colorMaker';
import React from 'react';
import d3 from 'd3';

class PieDataSeries extends React.Component {
  render () {
    const width = this.props.width;
    const height = this.props.height;
    const innerRadius = 20;
    const outerRadius = Math.min(width, height) / 2;
    const pie = d3.layout.pie();
    const keys = Object.keys(this.props.data);
    const data = [];
    for (const key of keys) {
      data.push(this.props.data[key]);
    }
    const slices = pie(data).map((point, index) => {
      const color = colorMaker(keys[index]);
      return (
        <PieSlice
            color={color}
            data={point.data}
            innerRadius={innerRadius}
            key={index}
            label={keys[index]}
            outerRadius={outerRadius}
            point={point}
        />
      );
    });
    return (
      <g transform={'translate(' + (width / 2) + ', ' + (height / 2) + ')'}>
        {slices}
      </g>
    );
  }
}

PieDataSeries.propTypes = {
  data: React.PropTypes.object.isRequired,
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default PieDataSeries;
