import React from 'react';
import d3 from 'd3';

class PieSlice extends React.Component {
  render () {
    const arc = d3.svg.arc()
      .outerRadius(this.props.outerRadius)
      .innerRadius(this.props.innerRadius);
    return (
      <g className="arc">
        <path
            d={arc(this.props.point)}
            fill={this.props.color}
        ></path>
        <text
            className="chart__text"
            dy="0.35em"
            textAnchor="middle"
            transform={'translate(' + arc.centroid(this.props.point) + ')'}
        >
          {this.props.label}
        </text>
      </g>
    );
  }
}

PieSlice.propTypes = {
  color: React.PropTypes.string.isRequired,
  innerRadius: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  outerRadius: React.PropTypes.number.isRequired,
  point: React.PropTypes.object.isRequired
};

export default PieSlice;
