/* There are many ways to reverse a string */

const reverseString1 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const reverseString2 = str => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

const reverseString3 = str =>
  str.split("").reduce((reversed, character) => character + reversed, "");

exports.reverseString1 = reverseString1;
exports.reverseString2 = reverseString2;
exports.reverseString3 = reverseString3;
