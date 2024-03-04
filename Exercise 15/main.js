"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// I use my exercise 14 guestlist//
let guestlist = [
    "Shawana",
    "Arisha",
    "Laiba",
];
//first print the name of person who can't make a dinner.
let guestWhocantmakeit = "Laiba";
console.log(`${guestWhocantmakeit} can't make it dinner.`);
//second change the guest.
let ChangingGuest = "Muskan";
let indexofchangeGuest = guestlist.indexOf(guestWhocantmakeit);
// console.log(indexofchangeGuest);
if (indexofchangeGuest !== -1) {
    guestlist[indexofchangeGuest] = ChangingGuest;
}
// console.log(guestlist[2]);
//Print a inviting massege to the changing guest.
console.log(`Second set of inviting message`);
guestlist.forEach((guest) => { console.log(`Hi ${guest}, I am inviting you for dinner. `); });
