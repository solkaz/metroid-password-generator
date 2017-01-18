import React, { PropTypes } from 'react';
import { makePasswordSections } from '../utils.js';

const PasswordDisplay = ({gameData}) => {
  const passwordSections = makePasswordSections(gameData);
  const displaySections = passwordSections.map((section, index) => {
    return (
      <div key={index}>
        <span>
          {section}
        </span>
        <br />
      </div>
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
