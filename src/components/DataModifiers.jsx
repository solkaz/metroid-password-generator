import React from 'react';
import OptionToggler from './OptionToggler.jsx';

const optionsList = [
  { title: 'Metroid Ball Taken', bitIndex: 0 },
  { title: 'Missile Container (Brinstar)', bitIndex: 1 },
  { title: 'Red Door (Long Beam)', bitIndex: 2},
  { title: 'Red Door (Tourian Bridge)', bitIndex: 3},
  { title: 'Samus has bombs', bitIndex: 72},
  { title: 'Samus has high jump boots', bitIndex: 73},
  { title: 'Samus has Long Beam', bitIndex: 74},
  { title: 'Samus has Screw Attack', bitIndex: 75},
  { title: 'Samus has Metroid Ball', bitIndex: 76},
  { title: 'Samus has Varia', bitIndex: 77},
  { title: 'Samus has Wave Beam', bitIndex: 78},
  { title: 'Samus has Ice Beam', bitIndex: 79},
];

class DataModifiers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const optionsToggler = optionsList.map((option, index) => {
      return (
        <OptionToggler
            key={index}
            title={option.title}
            toggleCallback={this.props.toggleCallback(option.bitIndex)}
            value={this.props.gameData[option.bitIndex]}
          />
      );
    });
    return (
      <div>
        { optionsToggler }
      </div>
    );
  }
}

DataModifiers.propTypes = {
  title: React.PropTypes.string,
  toggleCallback: React.PropTypes.func,
};

 export default DataModifiers;
