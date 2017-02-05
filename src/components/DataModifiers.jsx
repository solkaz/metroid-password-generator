import React, { PropTypes } from 'react';

import OptionToggler from './OptionToggler.jsx';
import GameTime from './GameTime.jsx';
import Missiles from './Missiles.jsx';
import StartLocation from './StartLocation.jsx';

import { bitsetToNumber } from '../utils.js';
import optionsList from '../optionsList.js';

class DataModifiers extends React.Component {
  render() {
    const optionsToggler = optionsList.map((option, index) => {
      return (
        <OptionToggler
            key={index}
            title={option.title}
            toggleCallback={this.props.toggleCallback(option.bitIndex)}
            value={this.props.gameData[option.bitIndex]}
          />
      );
    });
    return (
      <div>
        <StartLocation
          locationBitset={(this.props.gameData).slice(64, 68)}
          saveStartLocation={this.props.spliceCallback(64)}
        />
        <Missiles
          saveMissileCount={this.props.spliceCallback(80)}
          value={bitsetToNumber((this.props.gameData).slice(80, 88))}
        />
        <GameTime
          saveGameTime={this.props.spliceCallback(88)}
          value={bitsetToNumber((this.props.gameData).slice(88, 120))}
        />
        { optionsToggler }
      </div>
    );
  }
}

DataModifiers.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  spliceCallback: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

export default DataModifiers;
