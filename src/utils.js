import _ from 'lodash';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?- ';

export const makeNewPassword = () => {
  return _.times(136, _.constant(false));
};

export const numberToBitset = (num) => {
  let newBitset = [];
  do {
    newBitset.push(Boolean(num % 2));
    num = Math.floor(num / 2);
  } while (num > 0);
  return newBitset;
};

export const bitsetToNumber = (bitset) => {
  // Take a slice of arg to ensure we don't operate on the array itself
  // Additionally, remove any leading zeroes.
  return _.dropRightWhile(_.slice(bitset), (bit) => !bit)
    .reduce((sum, bit, index) => {
      return sum + (Number(bit) * Math.pow(2, index));
    }, 0);
};

const calculateChecksum = (bitset) => {
  const byteLength = 8;
  return _.chunk(bitset, byteLength) // split the game data into 17 8-bit bytes
    .map(bitsetToNumber) // convert the byte into a Number
    .reduce((checkSum, byteValue) => {
      // Add to the checksum
      return checkSum + byteValue;
    }, 0);
};

const makeChecksumByte = (gameData) => {
  const byteLength = 8;
  const checksum = calculateChecksum(gameData);
  const checksumBitset = numberToBitset(checksum);
  // Prepend any necessary zeroes to the bitset to make it
  // the correct length
  return padBitsetRight(checksumBitset, byteLength);
};

const shiftPassword = (bitset) => {
  // Byte length in this context is 8
  const byteLength = 8;
  const shiftByteStart = 128;
  const shiftByteEnd = 136;
  // Remove the shift byte from the password data for now
  const shiftByte = bitset.splice(shiftByteStart, shiftByteEnd);
  // Convert it to a number; this is how many times the
  // password data will be rotated to the right
  const shiftIterations = bitsetToNumber(shiftByte);
  let carryBit = true; let copyByte = [];
  for (let i = 0; i < shiftIterations; i++) {
    // Copy the first byte into the
    copyByte = bitset.slice(0, byteLength);
    bitset.unshift(carryBit);
    carryBit = bitset.pop();

    copyByte.unshift(carryBit);
    carryBit = copyByte.pop();
    bitset = copyByte.concat(bitset.slice(byteLength));
  }
  // Append the shift byte back into the game data
  return bitset.concat(shiftByte);
};

const translateByte = (byte) => {
  // Take the numeric value of the byte passed in
  const value = bitsetToNumber(byte);
  // Return the char at the index of value
  return alphabet[value];
};

export const translateBitset = (bitset) => {
  // Each character is translated from a 6-bit byt
  const byteLength = 6;
  return _.chunk(bitset, byteLength) // Make an Array of 24 6-bit bytes
    .map(translateByte) // Translate each byte into a char
    .reduce((password, translatedByte) => {
      // Prepend the translated char to the password
      return translatedByte + password;
    }, '');
};

export const makePassword = (gameData) => {
  const checksumBitset = makeChecksumByte(gameData);
  const shiftedPassword = shiftPassword(gameData.slice());
  return translateBitset(shiftedPassword.concat(checksumBitset));
};

export const splitPassword = (password) => {
  return [
    password.slice(0, 6),
    password.slice(6, 12),
    password.slice(12, 18),
    password.slice(18)
  ];
};

export const makePasswordSections = (bitset) => {
  const password = makePassword(bitset);
  return splitPassword(password);
};

export const flipBit = (bitset, index) => {
  // This should not mutate the bitset that was passed in; make a copy of it
  const bitsetCopy = bitset.slice();
  bitsetCopy[index] = !(bitsetCopy[index]);
  return bitsetCopy;
};

export const spliceBitset = (bitset, start, newBitset) => {
  const bitsetCopy = bitset.slice();
  bitsetCopy.splice(start, newBitset.length, ...newBitset);
  return bitsetCopy;
};

export const padBitsetRight = (bitset, length) => {
  if (bitset.length === length || bitset.length > length) {
    return bitset;
  }
  return (bitset).concat(_.times(length - Array.length, _.constant(false)));
};

// http://stackoverflow.com/a/1830844
export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export default { bitsetToNumber, numberToBitset };
