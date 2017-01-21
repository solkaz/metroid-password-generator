import React from 'react';
import OptionToggler from './OptionToggler.jsx';

class DataModifiers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <OptionToggler
          title="Metroid Ball taken"
          toggleCallback={this.props.toggleCallback(0)}
        />
      </div>
    );
  }
}

DataModifiers.propTypes = {
  title: React.PropTypes.string,
  toggleCallback: React.PropTypes.func,
};

 export default DataModifiers;
