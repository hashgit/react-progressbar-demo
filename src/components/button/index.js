import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { change: props.change };
  }

  render() {
    const { change } = this.state;
    return (
      <button className='button' value={change} onClick={this.props.onClick}>
        {change}
      </button>
    );
  }
}

export default Button;
