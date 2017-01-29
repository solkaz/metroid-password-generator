import PasswordDisplay from './PasswordDisplay.jsx';
import React from 'react';
import { flipBit, spliceBitset } from '../utils.js';
import DataModifiers from './DataModifiers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: new Array(136).fill(false),
    };
    this.toggleBitFactory = this.toggleBitFactory.bind(this);
    this.spliceFactory = this.spliceFactory.bind(this);
  }

  toggleBitFactory(bitIndex) {
    return () => {
      const gameData = this.state.gameData;
      this.setState({
        gameData: flipBit(gameData, bitIndex),
      });
    };
  }

  spliceFactory(start) {
    return (bitset) => {
      const gameData = this.state.gameData;
      this.setState({
        gameData: spliceBitset(gameData, start, bitset),
      });
    };
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
        spliceCallback={this.spliceFactory}
        toggleCallback={this.toggleBitFactory}
      />
      </div>
    );
  }
}

export default App;
