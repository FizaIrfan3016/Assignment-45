"use strict";
/**Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
// Version 1 
const alienColor = "green";
if (alienColor === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("Player earned 15 points.");
}
// Version 2
const alien_color = "yellow";
if (alien_color === 'green') {
    console.log('Player earned 5 points');
}
else if (alien_color === 'yellow') {
    console.log('Player earned 10 points.');
}
else if (alien_color === 'red') {
    console.log('Player earned 15 points.');
}
//Version 3
const alien = "red";
// 
if (alien === 'green') {
    console.log(' Player earned 5 points');
}
else if (alien === 'yellow') {
    console.log('Player earned 10 points.');
}
else if (alien === 'red') {
    console.log('Player earned 15 points.');
}
