//Seeing the World: Think of at least five places in the world you’d like to visit.
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.

// 2• Print your array in its original order.

// 3• Print your array in alphabetical order without modifying the actual list.

// 4• Show that your array is still in its original order by printing it.

// 5• Print your array in reverse alphabetical order without changing the order of the original list.

// 6• Show that your array is still in its original order by printing it again.

// 7• Reverse the order of your list. Print the array to show that its order has changed.

// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.

// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

//Step 1

let destinationPlace:string[]=["Saudia Arabia", "South korea", "Paris", "London", "Bali", "Dubai"];

//Step 2
console.log("Original order")
console.log(destinationPlace);

//Step 3
console.log("\n Alphabetical order without modifying the actual list");
console.log([...destinationPlace].sort());

//Step 4
console.log(" \n Array is still in its original order")
console.log(destinationPlace);

//Step 5
console.log("\n Array in reverse alphabetical order without changing the order of the original list");
console.log([...destinationPlace].sort().reverse());

//step 6
console.log(" \n Array is still in its original order")
console.log(destinationPlace);

//Step 7
console.log(" \n Reverse the order of your list")
destinationPlace.reverse()
console.log(destinationPlace);

//Step 8
console.log(" \n Reverse the order of your list again ")
destinationPlace.reverse()
console.log(destinationPlace);

//Step 9
console.log("\n Sort your array so it's stored in alphabetical order");
console.log([...destinationPlace].sort());

//Step 10
console.log(" \n Reverse your array so it's stored in alphabetical order");
destinationPlace.sort().reverse()
console.log(destinationPlace);


