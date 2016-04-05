import React from 'react';
import d3 from 'd3';

class AsterSlice extends React.Component {
  render () {
    const outerRadius = this.props.outerRadius,
    innerRadius = this.props.innerRadius,
    arc = d3.svg.arc()

      .outerRadius(({data: {score: score}}) =>

        (outerRadius - innerRadius)*(score/10.0) + innerRadius
      )
      .innerRadius(this.props.innerRadius);

    return (
      <g className="arc">
        <path
            d={arc(this.props.point)}
            fill={this.props.color}
        ></path>
        <text
            className="aster-label"
            dy="1.382em"
            textAnchor="middle"
            transform={'translate(' + arc.centroid(this.props.point) + ')'}
        >
          {this.props.label}
        </text>
        <text
            className="aster-score"
            dy="0.35em"
            textAnchor="middle"
            transform={'translate(' + arc.centroid(this.props.point) + ')'}
        >
          {this.props.score}
        </text>
      </g>
    );
  }
}

AsterSlice.propTypes = {
  color: React.PropTypes.string.isRequired,
  point: React.PropTypes.object.isRequired,
  label: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  outerRadius: React.PropTypes.number.isRequired,
  innerRadius: React.PropTypes.number.isRequired
};

export default AsterSlice;
