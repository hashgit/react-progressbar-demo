import React, { Component } from 'react';

class Bar extends Component {
  constructor(props) {
    super(props);

    const progress = props.progress < 0 ? 0 : props.progress;
    const width = progress > 100 ? 100 : progress;
    this.state = { progress: progress, width };
  }

  componentWillReceiveProps(updated) {
    if (updated.progress !== this.state.progress) {
      this.setState({
        progress: updated.progress,
        width: updated.progress > 100 ? 100 : updated.progress
      });  
    }
  }

  render() {
    const { progress } = this.state;
    const color = progress > 100 ? '#Fb9b9b' : 'lightgreen';
    const style = {
      width: `${this.state.width}%`,
      backgroundColor: color,
      transition: 'width 2s',
    };

    return (
      <div className='bar bar-height'>
        <div className='label'>{progress}%</div>
        <div className='bar-height' style={style}></div>
      </div>
    );
  }
}

export default Bar;
