import React from 'react';

class OptionToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <button onClick={this.props.toggleCallback}>
          {this.props.title} - { String(this.props.value) }
        </button>
        <br />
      </div>
    );
  }
}

OptionToggler.propTypes = {
  title: React.PropTypes.string.isRequired,
  toggleCallback: React.PropTypes.func.isRequired,
  value: React.PropTypes.bool.isRequired
};

export default OptionToggler;
