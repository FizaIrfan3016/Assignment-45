"use strict";
/**Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
// Alien color
const alienColor = "green"; // Change this to test different colors
// If-else chain version 1 (runs the if block)
if (alienColor === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// If-else chain version 2 (runs the else block)
if (alienColor !== "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
