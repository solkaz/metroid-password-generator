import PasswordDisplay from './PasswordDisplay.jsx';
import React from 'react';
import { flipBit } from '../utils.js';
import DataModifiers from './DataModifiers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: new Array(136).fill(false),
    };
    this.toggleBitFactory = this.toggleBitFactory.bind(this);
    this.toggleBit = this.toggleBit.bind(this);
  }
  toggleBitFactory(bitIndex) {
    return () => {
      this.toggleBit(bitIndex);
    };
  }

  toggleBit(bitIndex) {
    const gameData = this.state.gameData;
    this.setState({
      gameData: flipBit(gameData, bitIndex),
    });
  }
  render() {
    return (
      <div>
        <h1>Metroid Password Generator</h1>
        <PasswordDisplay
          gameData={this.state.gameData.slice()}
        />
      <DataModifiers
        gameData={this.state.gameData.slice()}
        toggleCallback={this.toggleBitFactory}
      />
      </div>
    );
  }
}

export default App;
