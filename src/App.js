import React, { Component } from 'react';
import Bar from './components/bar';
import Button from './components/button';
import './App.css';

class App extends Component {
  apiUrl = 'http://localhost:8080/api/bars';
  state = { bars: [], buttons: [] };

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
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { bars, buttons } = this.state;
    const barsHtml = bars ? bars.map(bar => (<Bar progress={bar} />)) : null;
    const buttonsHtml = buttons ? buttons.map(button => (<Button change={button} />)) : null;
    return (
      <div className='center'>
        {barsHtml}
        <div className='buttonContainer'>
          {buttonsHtml}
        </div>
      </div>
    );
  }
}

export default App;
