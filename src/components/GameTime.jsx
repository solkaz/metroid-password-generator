import React from 'react';
import { numberToBitset, padBitsetLeft, isNumeric } from '../utils.js';

const gameTimeMax = 4294967296;

const isValidInput = (val) => {
  return isNumeric(val) && val < gameTimeMax;
};

const GameTime = ({ saveGameTime, value }) => {
  const onChange = (ev) => {
    const gameTicksInput = ev.target.value;
    const gameTicks = isValidInput(gameTicksInput) ? Number(gameTicksInput) : value;
    // Convert the value to a 32-bit bitset
    const gameTicksBitset = padBitsetLeft(numberToBitset(gameTicks), 32);
    saveGameTime(gameTicksBitset);
  };

  return (
    <div>
      <input
        type="number"
        min={0}
        max={gameTimeMax}
        value={value}
        onChange={onChange}
      /> Game Ticks
    </div>
  );
};

export default GameTime;
