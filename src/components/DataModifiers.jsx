import React, { PropTypes } from 'react';
import OptionToggler from './OptionToggler.jsx';
import GameTime from './GameTime.jsx';
import Missiles from './Missiles.jsx';

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
        <Missiles
          saveMissileCount={this.props.spliceCallback(80)}
        />
        <GameTime
          saveGameTime={this.props.spliceCallback(88)}
        />
        { optionsToggler }
      </div>
    );
  }
}

DataModifiers.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  spliceCallback: PropTypes.func.isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

 export default DataModifiers;