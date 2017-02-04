import React, { PropTypes } from 'react';

const ResetButton = ({ resetCallback }) => (
  <button onClick={resetCallback}>Reset</button>
);

ResetButton.propTypes = {
  resetCallback: PropTypes.func.isRequired,
};

export default ResetButton;
