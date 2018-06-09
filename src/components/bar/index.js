import React, { Component } from 'react';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = { progress: props.progress < 0 ? 0 : props.progress };
  }

  componentWillReceiveProps(updated) {
    if (updated.progress !== this.props.progress) {
      this.setState({
        progress: updated.progress < 0 ? 0 : updated.progress,
      });
    }
  }

  render() {
    const { progress } = this.state;
    const color = progress > 100 ? 'red' : 'lightgreen';
    return (
      <div className='bar bar-height'>
        <div className='label'>{progress}%</div>
        <div className='bar-height' style={{ width: `${this.state.progress}%`, backgroundColor: color }}></div>
      </div>
    );
  }
}

export default Bar;
