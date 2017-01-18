import React from 'react';
import PasswordDisplay from './PasswordDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: new Array(136).fill(false),
    };
  }
  render() {
    return (
      <div>
        <h1>Metroid Password Generator</h1>
        <PasswordDisplay
          gameData={this.state.gameData.slice()}
        />
      </div>
    );
  }
}

export default App;
