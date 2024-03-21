"use strict";
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// My name is Fiza Irfan. Date: 20-02-24 . I wrote this code for print a famous quote in commondpromt.
let famousQuote = ('Albert Einstein once said,"I have no special talent.I am only passionately curious."');
console.log(famousQuote);
//My name is Fiza Irfan. Date: 20-02-24 . I wrote this code for print a name in 3 different cases (lowercase, uppercase and titlecase) in commomdpromt.
let personName = 'John marshall';
// step 1 show in lowercase.
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// step 2 show in uppercase.
let uppercaseName = personName.toLocaleUpperCase();
console.log(uppercaseName);
// step 3 show in titlecase.
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
