import React from 'react';

class OptionToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <button onClick={this.props.toggleCallback}>
        {this.props.title}
      </button>
    );
  }
}

 OptionToggler.propTypes = {
  title: React.PropTypes.string.isRequired,
  toggleCallback: React.PropTypes.isRequired,
};

export default OptionToggler;
