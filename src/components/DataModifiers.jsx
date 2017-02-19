import React, { PropTypes } from 'react';

import ModifierSection from './ModifierSection.jsx';
import OptionToggler from './OptionToggler.jsx';

import { bitsetToNumber } from '../utils.js';
import { modifierSections } from '../optionsList.js';

const DataModifiers = ({ gameData, spliceCallback, toggleCallback }) => {
  const modifierFactory = ({ type, props }, index) => {
    switch (type) {
    case 'TOGGLE': {
      return (
        <OptionToggler
          key={index}
          title={props.title}
          toggleCallback={toggleCallback(props.bitIndex)}
          value={gameData[props.bitIndex]}
        />
      );
    }
    default: {
      return null;
    }
    }
  };
  return (
    <div>
      {modifierSections.map((section) => {
        return (
          <ModifierSection
            key={section.title}
            title={section.title}
          >
            {(section.modifiers).map((modifier, index) => modifierFactory(modifier, index))}
          </ModifierSection>
        );
      })}

    </div>
  );
};

DataModifiers.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  spliceCallback: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

export default DataModifiers;
