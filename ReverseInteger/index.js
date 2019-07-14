/* Reversing Integer 
Example: 1234 => 4321; -1234 => -4321; 500 => 5
*/

const reverseInteger1 = number =>
  parseInt(
    number
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(number);

exports.reverseInteger1 = reverseInteger1;
