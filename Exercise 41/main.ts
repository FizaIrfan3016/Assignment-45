//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["Harry potter", "Harmaini grenjer", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);
