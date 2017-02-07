import _ from 'lodash';

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
        [false, true],
        [false, false, true],
        [false, false, false, true],
        [false, false, false, false, true],
        [false, false, false, false, false, true],
        [false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, true],
      ];
      _.zip(powersOfTwo, powersOfTwoBitsets)
        .map(([ powerOfTwo, powersOfTwoBitset ]) => {
          expect(Utils.bitsetToNumber(powersOfTwoBitset)).toEqual(powerOfTwo);
        });
    });
    it('should convert values with(out) leading zeroes', () => {
      const threeBitset = [ true, true ];
      const threeBitsetPadded = [ true, true, false, false ];
      expect(Utils.bitsetToNumber(threeBitset)).toEqual(Utils.bitsetToNumber(threeBitsetPadded));
    });
  });
  describe('numberToBitset', () => {
    it('should convert 0 to [false]', () => {
      expect(Utils.numberToBitset(0)).toEqual([false]);
    });
    it('should convert 1 to [true]', () => {
      expect(Utils.numberToBitset(1)).toEqual([true]);
    });
    it('should convert 2 to [false, true]', () => {
      expect(Utils.numberToBitset(2)).toEqual([false, true]);
    });
    it('should convert 11 to [true, true, false, true]', () => {
      expect(Utils.numberToBitset(11)).toEqual([true, true, false, true]);
    });
    it('should convert 125 to [true, false, true, true, true, true, true]', () => {
      expect(Utils.numberToBitset(125)).toEqual([true, false, true, true, true, true, true]);
    });
  });
  describe('makePassword', () => {
    it('should correctly make a password', () => {
      const bitset = Utils.makeNewPassword();
      expect(Utils.makePassword(bitset)).toEqual('000000000000000000000000');
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
  describe('flipBit', () => {
    it('flips a bit', () => {
      const bitset = [false, false, false, false];
      const expected = [true, false, false, false];
      expect(Utils.flipBit(bitset, 0)).toEqual(expected);
    });
    it('flipping the same bit twice should result in no changed state', () => {
      const bitset = [false, false, false, false];
      expect(Utils.flipBit(Utils.flipBit(bitset, 0), 0)).toEqual(bitset);
    });
  });
  describe('spliceBitset', () => {
    it('should set splice the bitset and replace the deleted elements', () => {
      const zeroBitset = [false, false, false, false];
      const toAdd = [true, true];
      const received = Utils.spliceBitset(zeroBitset, 1, toAdd);
      expect(received).toEqual([false, true, true, false]);
    });
  });
  describe('padBitsetRight', () => {
    it('should pad a bitset to the desired length', () => {

    });
    it('should NOT modify the value of a bitset', () => {
      const threeBitset = [ true, true ]
    });
  });
});
