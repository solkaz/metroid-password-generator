import * as Utils from '../src/utils.js';

describe('Utils.js', () => {
  describe('bitsetToNumber', () => {
    it('should convert [false] to 0', () => {
      const zeroBitset = [false];
      expect(Utils.bitsetToNumber(zeroBitset)).toEqual(0);
    });
    it('should convert powers of two', () => {
      const powersOfTwo = [1, 2, 4, 8, 16, 32, 64, 128];
      const powersOfTwoBitsets = [
        [true],
        [true, false],
        [true, false, false],
        [true, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false, false],
        [true, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false],
      ];
      powersOfTwo.map((power, index) => {
        expect(Utils.bitsetToNumber(powersOfTwoBitsets[index])).toEqual(power);
      });
    });
  });
  describe('makePassword', () => {
    it('should correctly make a password', () => {
      const bitset = new Array(144).fill(false);
      expect(Utils.makePassword(bitset)).toEqual('000000000000000000000000');
    });
  });
  describe('numberToBitset', () => {
    it('should convert 0 to [false]', () => {
      expect(Utils.numberToBitset(0)).toEqual([false]);
    });
    it('should convert 1 to [true]', () => {
      expect(Utils.numberToBitset(1)).toEqual([true]);
    });
    it('should convert 11 to [true, false, true, true]', () => {
      expect(Utils.numberToBitset(11)).toEqual([true, false, true, true]);
    });
    it('should convert 125 to [true, true, true, true, true, false, true]', () => {
      expect(Utils.numberToBitset(125)).toEqual([true, true, true, true, true, false, true]);
    });
  });
  describe('translateBitset', () => {
    it('should translate an empty bitset', () => {
      const bitset = new Array(144).fill(false);
      expect(Utils.translateBitset(bitset)).toEqual('000000000000000000000000');
    });
  });
  describe('splitPassword', () => {
    it('should split the password into 4 sections of size 6', () => {
      const password = '000000000000000000000000';
      const expected = [
        '000000',
        '000000',
        '000000',
        '000000',
      ];
      expect(Utils.splitPassword(password)).toEqual(expected);
    });
  });
});
