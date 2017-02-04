const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?- ';

export const numberToBitset = (num) => {
  let newBitset = [];
  do {
    newBitset.push(Boolean(num % 2));
    num = Math.floor(num / 2);
  } while (num > 0);
  return newBitset.reverse();
};

export const bitsetToNumber = (bitset) => {
  // Take a slice of arg to ensure we don't operate on the array itself
  const reversedBitset = bitset.slice();
  const sum = reversedBitset.reduce((sum, bit, index) => {
    return sum + (Number(bit) * Math.pow(2, index));
  }, 0);
  return sum;
};

const calculateChecksum = (bitset) => {
  return (bitset.reduce((sum, bit) => {
    return sum + Number(bit);
  }, 0) & 255);
};

const makeChecksumByte = (gameData) => {
  const byteLength = 8;
  const checksum = calculateChecksum(gameData);
  const checksumBitset = numberToBitset(checksum);
  // Prepend any necessary zeroes to the bitset to make it
  // the correct length
  while (checksumBitset.length < byteLength) {
    checksumBitset.unshift(false);
  }
  return checksumBitset;
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
  let password = '';
  // Each character is translated from a 6-bit byt
  const byteLength = 6;
  const numOfBytes = 24;
  for (let byteNum = 0; byteNum < numOfBytes; byteNum++) {
    password += translateByte(bitset.slice(byteLength * byteNum, byteLength * (byteNum + 1)));
  }
  return password;
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
    password.slice(18),
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

export const padBitsetLeft = (bitset, length) => {
  if (bitset.length === length) {
    return bitset;
  }
  return (Array(length - bitset.length).fill(false)).concat(bitset);
};

// http://stackoverflow.com/a/1830844
export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export default { bitsetToNumber, numberToBitset };
