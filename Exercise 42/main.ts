//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to modify magicians by adding "the Great" to each name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicians: string[] = ["Harry potter", "Harmaini grenjer", "Penny" ,"Teller"];

// Call show_magicians to print the original list of magicians
console.log("Original list of magicians:");
show_magicians(magicians);

// Call make_great to modify the list of magicians
make_great(magicians);

// Call show_magicians again to print the modified list of magicians
console.log("\nModified list of magicians:");
show_magicians(magicians);
