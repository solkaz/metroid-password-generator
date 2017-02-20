import React, { PropTypes } from 'react';

import OptionToggler from './OptionToggler.jsx';

import optionsList from '../optionsList.js';

const RawBitsetViewer = ({ bitset, toggleCallback }) => {
  const rawBitOptions = optionsList.map((option, index) => {
    return (
      <OptionToggler
        key={option.title + index}
        title={option.title}
        toggleCallback={toggleCallback(option.bitIndex)}
        value={bitset[option.bitIndex]}
      />
    );
  });
  return (
    <div>
      {rawBitOptions}
    </div>
  );
};

RawBitsetViewer.propTypes = {
  bitset: PropTypes.arrayOf(PropTypes.bool).isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

export default RawBitsetViewer;
