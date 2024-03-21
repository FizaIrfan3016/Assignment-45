"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Import guest list from exercise
// Exercise 15 guestlist
const GuestsList = [
    "Shawana",
    "Arisha",
    "Laiba"
];
let count = 0;
while (count < GuestsList.length) {
    count++;
    console.log(count);
}
;
console.log(`Number of people that are inviting for dinner =${count}`);
