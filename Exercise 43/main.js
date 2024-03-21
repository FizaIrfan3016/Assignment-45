var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the original array of magician names
var magicians = ["Harry potter", "Hermaini", "Penny", "Teller"];
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
// Function to show the magicians' names
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Make a copy of the original array and call make_great function
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Show the original array and the array with "the Great" added
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
