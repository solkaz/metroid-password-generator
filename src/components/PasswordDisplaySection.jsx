import React, { PropTypes } from 'react';

const PasswordDisplaySection = ({section}) => (
  <div>
    <span>
      {section}
    </span>
    <br />
  </div>
);

PasswordDisplaySection.propTypes = {
  section: PropTypes.string,
};

export default PasswordDisplaySection;
