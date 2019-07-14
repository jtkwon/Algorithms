/*
Fizz Buzz is a program that returns console logs from 1 to n.
For multiples of 3, the console log will return "fizz",  
and with multiples of 5, the console log will return "buzz"

Example:
1
2
fizz
4
buzz
*/

const fizzBuzz1 = number => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

exports.fizzBuzz1 = fizzBuzz1;
