import React from 'react';

class Bar extends React.Component {
  render () {
    const x = this.props.offset;
    const y = this.props.availableHeight - this.props.height;
    const textX = this.props.width / 2;
    return (
      <g transform={'translate(' + x + ', ' + y + ')'}>
        <rect
            fill={this.props.color}
            height={this.props.height}
            width={this.props.width}
        />
        <text
            className="chart__text"
            dy="1.35em"
            textAnchor="middle"
            x={textX}
            y="0"
        >{this.props.label}</text>
      </g>
    );
  }
}

Bar.propTypes = {
  availableHeight: React.PropTypes.number.isRequired,
  color: React.PropTypes.string.isRequired,
  height: React.PropTypes.number.isRequired,
  label: React.PropTypes.string.isRequired,
  offset: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default Bar;
