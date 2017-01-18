import Utils from './utils.js';

class PasswordGenerator {
  constructor () {

  }

  makePassword(bitset) {
    // Calculate the checksum from the game data
    const checksum = this.calculateChecksum(bitset.slice(0, 136));
    // Translate the numeric repr into a bitset and store it into the bitset
    const checksumBitset = Utils.numberToBitset(checksum);
    // Translate each 6-bit byte into a char
  }

  calculateChecksum(bitsetSlice) {
    const sliceSum = bitsetSlice.reduce((sum, bit) => {
      return sum + Number(bit);
    }, 0);
    return sliceSum ^ 255;
  }
}

export default PasswordGenerator;
