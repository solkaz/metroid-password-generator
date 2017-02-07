import React from 'react';

const OptionToggler = ({ title, toggleCallback, value }) => {
  return (
    <div>
      <button onClick={toggleCallback}>
        {title} - { String(value) }
      </button>
      <br />
    </div>
  );
};

OptionToggler.propTypes = {
  title: React.PropTypes.string.isRequired,
  toggleCallback: React.PropTypes.func.isRequired,
  value: React.PropTypes.bool.isRequired
};

export default OptionToggler;
