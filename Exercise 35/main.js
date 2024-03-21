"use strict";
/**Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
// Array containing the names of animals
let animals = ["Dog", "Cat", "Rabbit"];
// Printing the names of each animal using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}
// Printing a statement about each animal
console.log("\nPrinting statements about animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Statement about what these animals have in common
console.log("\nAny of these animals would be a great pet!");
