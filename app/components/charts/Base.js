import React from 'react';

// http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/
class Base extends React.Component {
  render () {
    return (
      <svg
          height={this.props.height}
          width={this.props.width}
      >
        {this.props.children}
      </svg>
    );
  }
}

Base.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

export default Base;
