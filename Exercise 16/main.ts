// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the
//  end of your list. • Print a new set of invitation messages, one for each person in your list.

//I use exercise 15 code.

let guestlist:Array<string> =[
    "Shawana",
    "Arisha",
    "Laiba",
];

//Exercise 16 Solution.
//Step 1 informing people that You found a bigger table.

for ( let guest of guestlist )
{
    console.log(`Dear ${guest} I found a bigger dinning table.`)
}
 //step 2 Add a new guest in the beginning of an array.
 let guestAdd:string= "Bilquees "
 guestlist.unshift(guestAdd)
//  console.log(guestlist);

 //3 step add new guest in the middle of the array.

 let guestAdd2:string="Fatima"
 let inIndex:number= Math.floor(guestlist.length/2)
 guestlist.splice(inIndex, 0, guestAdd2)
//  console.log(guestlist)

//4 step add a new guest in the end of the array.

let guestAdd3:string="Muskan"
guestlist.push(guestAdd3)
// console.log(guestlist)

//Last step.

console.log(` New set of invitation.`)
guestlist.forEach(( guest:string) =>
{ console.log( `Hi ${guest}, I am inviting you for dinner. `)}
); 




/*first print the name of person who can't make a dinner.

let guestWhocantmakeit:string= "Laiba";
console.log(`${guestWhocantmakeit} can't make it dinner.`);

//second change the guest.

let ChangingGuest: string= "Muskan";
let indexofchangeGuest:number= guestlist.indexOf(guestWhocantmakeit)
// console.log(indexofchangeGuest);

if ( indexofchangeGuest !== -1)
{
    guestlist[indexofchangeGuest]= ChangingGuest
}
// console.log(guestlist[2]);

//Print a inviting massege to the changing guest.
console.log(`Second set of inviting message`)
guestlist.forEach(( guest:string) =>
{ console.log( `Hi ${guest}, I am inviting you for dinner. `)}
); */