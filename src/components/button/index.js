import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { change: props.change };
  }

  render() {
    const { change } = this.state;
    return (
      <Button className='button'>
        {change}
      </Button>
    );
  }
}

export default Button;
