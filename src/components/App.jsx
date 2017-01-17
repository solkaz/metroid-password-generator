import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitset: new Array(144).fill(false)
    };
  }
  render() {
    return (
      <div>
        <h2>Metroid Password Generator</h2>
      </div>
    );
  }
}

export default App;
