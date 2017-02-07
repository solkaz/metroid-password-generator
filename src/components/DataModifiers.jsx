import React, { PropTypes } from 'react';

import OptionToggler from './OptionToggler.jsx';
import StartLocation from './StartLocation.jsx';
import NumberRange from './NumberRange.jsx';

import { bitsetToNumber } from '../utils.js';
import optionsList from '../optionsList.js';

const DataModifiers = ({ gameData, spliceCallback, toggleCallback }) => {
  const optionsToggler = optionsList.map((option, index) => {
    return (
      <OptionToggler
          key={index}
          title={option.title}
          toggleCallback={toggleCallback(option.bitIndex)}
          value={gameData[option.bitIndex]}
        />
    );
  });
  return (
    <div>
      <StartLocation
        locationBitset={(gameData).slice(64, 68)}
        saveStartLocation={spliceCallback(64)}
      />
      <NumberRange
        bitsetLength={8}
        maxValue={255}
        saveCallback={spliceCallback(80)}
        title="Missiles"
        value={bitsetToNumber((gameData).slice(80, 88))}
      />
      <NumberRange
        bitsetLength={32}
        maxValue={4294967296}
        saveCallback={spliceCallback(88)}
        title="Game Time"
        value={bitsetToNumber((gameData).slice(88, 120))}
      />
      { optionsToggler }
    </div>
  );
};

DataModifiers.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  spliceCallback: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

export default DataModifiers;
