/* 
Maximum Character is to find 
which character is mostly used in the given string
Example - abbcccdddddddddd will return "d"
*/

const findMaxCharacter1 = str => {
  const chars = {};
  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  let max = 0;
  return Object.keys(chars).reduce(
    (maxChar, char) => (chars[char] > max ? char : maxChar),
    ""
  );
};

const findMaxCharacter2 = str => {
  const chars = {};
  const max = 0;
  let maxChar = "";

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] > max) {
      maxChar = char;
    }
  }

  return maxChar;
};

exports.findMaxCharacter1 = findMaxCharacter1;
exports.findMaxCharacter2 = findMaxCharacter2;
