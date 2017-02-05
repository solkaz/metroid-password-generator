import React from 'react';

import DataModifiers from './DataModifiers.jsx';
import PasswordDisplay from './PasswordDisplay.jsx';
import ResetButton from './ResetButton.jsx';

import { flipBit, makeNewPassword, spliceBitset } from '../utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: makeNewPassword(),
    };
    this.resetGameData = this.resetGameData.bind(this);
    this.spliceFactory = this.spliceFactory.bind(this);
    this.toggleBitFactory = this.toggleBitFactory.bind(this);
  }

  resetGameData() {
    this.setState({
      gameData: makeNewPassword(),
    });
  }

  spliceFactory(start) {
    return (bitset) => {
      const gameData = this.state.gameData;
      this.setState({
        gameData: spliceBitset(gameData, start, bitset),
      });
    };
  }

  toggleBitFactory(bitIndex) {
    return () => {
      const gameData = this.state.gameData;
      this.setState({
        gameData: flipBit(gameData, bitIndex),
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
        <ResetButton
          resetCallback={this.resetGameData}
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
