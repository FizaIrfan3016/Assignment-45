//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the original array of magician names
let magicians: string[] = ["Harry potter", "Hermaini", "Penny","Teller"];

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

// Function to show the magicians' names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Make a copy of the original array and call make_great function
let greatMagicians: string[] = make_great([...magicians]);

// Show the original array and the array with "the Great" added
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

