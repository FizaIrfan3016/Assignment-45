"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Exercise 16 Solution.
//Guest list.
let guestlist = [
    "Bilquees",
    "Shawana",
    "Fatima",
    "Arisha",
    "Laiba",
    "Muskan"
];
// for ( let guest of guestlist )
// {
//     console.log(`Dear ${guest} I found a bigger dinning table.`)
// }
//  //step 2 Add a new guest in the beginning of an array.
//  let guestAdd:string= "Bilquees "
//  guestlist.unshift(guestAdd)
// //  console.log(guestlist);
//  //3 step add new guest in the middle of the array.
//  let guestAdd2:string="Fatima"
//  let inIndex:number= Math.floor(guestlist.length/2)
//  guestlist.splice(inIndex, 0, guestAdd2)
// //  console.log(guestlist)
// //4 step add a new guest in the end of the array.
// let guestAdd3:string="Muskan"
// guestlist.push(guestAdd3)
// // console.log(guestlist)
// //Last step.
// console.log(` New set of invitation.`)
// guestlist.forEach(( guest:string) =>
// { console.log( `Hi ${guest}, I am inviting you for dinner. `)}
// ); 
//Now start a solution of Exercise 17
//Message of inviting only two people
console.log('I can invite only two people for dinner');
//Remove guests from the list of invition.
while (guestlist.length > 2) {
    let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestlist) {
    console.log(`Hi, ${guest},you are still invited for dinner.`);
}
;
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.pop();
guestlist.pop();
//print empty guest list
console.log('Guest list after dinner', guestlist);
