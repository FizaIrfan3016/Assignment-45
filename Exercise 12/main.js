"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Use exercise 11 code.
let names = [
    'John', 'Sunny', 'Maria', 'Emaa'
];
/* I use this for each person name with message.
let message:string=`Hi everyone! ${names[]} said.`;

  console.log(message)
  console.log(message)
  console.log(message)
  console.log(message) */
for (let name of names) {
    //print a personalized message for each friend.
    console.log(`Good Night ${name}, I hope you are doing well!`);
}
