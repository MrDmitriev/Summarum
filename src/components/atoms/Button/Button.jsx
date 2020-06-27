import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    const {size, btnStyle, value} = this.props;
    return (
      <button
        type="button"
        className={`btn btn-${btnStyle} btn-${size} btn-upper`}
      >
        {value}
      </button>
    );
  }
}
