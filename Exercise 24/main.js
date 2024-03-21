"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// Tests for equality and inequality with strings
const string1 = "Hello";
const string2 = "Asim";
console.log(string1 == string2); //False
console.log(string1 != string2); //True
// Tests using the lower case function
const uppercaseString = "HELLO";
const lowercaseString = "hello";
console.log(uppercaseString.toLowerCase() == lowercaseString); // True
console.log(uppercaseString == lowercaseString); // False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
//Tests using "and" and "or" operators
const x = 5;
const y = 10;
console.log(x < 10 && y > 5); // True
console.log(x !== 5 || y !== 10); // False
// Test whether an item is in an array
let Names = ["Fatima", "Rabia", "Sania", "Shavana"];
console.log(`Test name is in the array:`, Names.includes('Shavana'));
// Test whether an item is not in an array
let NamesNot = ["Fatima", "Rabia", "Sania", "Shavana"];
console.log(`Test name is in the array:`, Names.includes('Muskan'));
