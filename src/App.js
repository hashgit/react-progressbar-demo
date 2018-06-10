import React, { Component } from 'react';
import Bar from './components/bar';
import Button from './components/button';
import './App.css';

class App extends Component {
  apiUrl = 'http://localhost:8080/api/bars';
  state = { selectedBar: -1, bars: [], buttons: [] };

  componentDidMount() {
    const self = this;
    fetch(this.apiUrl)
      .then(data => {
        return data.json();
      })
      .then(json => {
        self.setState({
          bars: json.bars,
          buttons: json.buttons,
          selectedBar: -1,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeSelect = (value) => {
    this.setState(state => {
      state.selectedBar = value;
      return state;
    });
  }

  click = (value) => {
    if (this.state.selectedBar > -1 && this.state.selectedBar < this.state.bars.length)
    {
      this.setState(state => {
        const newValue = state.bars[state.selectedBar] + parseInt(value, 10);
        state.bars[state.selectedBar] = newValue < 0 ? 0 : newValue;
        return state;
      });  
    }
  }

  render() {
    const { bars, buttons } = this.state;
    const barsHtml = bars ? bars.map((bar, index) => (<Bar key={index} progress={bar} />)) : null;
    const buttonsHtml = buttons ? buttons.map((button, index) => (<Button key={index} change={button} onClick={(event) => this.click(event.target.value)} />)) : null;

    return (
      <div className='center'>
        {barsHtml}
        <select onChange={(event) => this.changeSelect(event.target.value)} value={this.state.selectedBar}>
          <option>Select a bar</option>
          {bars && bars.map((bar, index) => <option value={index} key={index}>{index}: {bar}%</option>)}
        </select>
        <div className='buttonContainer'>
          <div style = {{ display: 'table-row' }}>
            {buttonsHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
