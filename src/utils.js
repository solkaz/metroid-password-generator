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
  const reversedBitset = bitset.slice().reverse();
  const sum = reversedBitset.reduce((sum, bit, index) => {
    return sum + (Number(bit) * Math.pow(2, index));
  }, 0);
  return sum;
};

export default { bitsetToNumber, numberToBitset };
