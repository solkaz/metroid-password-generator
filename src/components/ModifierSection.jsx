import React, { PropTypes } from 'react';

export const ModifierSection = ({ children, title }) => {

  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

ModifierSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModifierSection;
