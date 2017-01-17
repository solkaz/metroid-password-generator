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
  describe('numberToBitset', () => {
    it('should convert 0 to [false]', () => {
      expect(Utils.numberToBitset(0)).toEqual([false]);
    });
    it('should convert 1 to [true]', () => {
      expect(Utils.numberToBitset(1)).toEqual([true]);
    });
  });
});
