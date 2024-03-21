"use strict";
// Array containing the names of favorite pizzas
let favoritePizzas = ["Pepperoni", "Fajita", "BBQ Chicken"];
// Printing the names of each pizza using a for loop
console.log("Printing pizza names:");
for (let pizzaName of favoritePizzas) {
    console.log(pizzaName);
}
// Printing a sentence for each pizza
console.log("\nPrinting sentences about favorite pizzas:");
for (let pizzaName of favoritePizzas) {
    console.log(`I like ${pizzaName} pizza.`);
}
// Statement about how much I like pizza
console.log("\nI really love pizza!");
