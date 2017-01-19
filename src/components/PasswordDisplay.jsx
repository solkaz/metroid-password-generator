import React, { PropTypes } from 'react';
import { makePasswordSections } from '../utils.js';
import PasswordDisplaySection from './PasswordDisplaySection.jsx';

const PasswordDisplay = ({gameData}) => {
  const passwordSections = makePasswordSections(gameData);
  const displaySections = passwordSections.map((section, index) => {
    return (
      <PasswordDisplaySection
        key={index}
        section={section}
      />
    );
  });
  return (
    <div>
      {displaySections}
    </div>
  );
};

PasswordDisplay.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.bool),
};

export default PasswordDisplay;
