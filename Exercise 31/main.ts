/**No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

// non empty array case
let usernames: string[] = ['admin', 'Eric', 'Alia', 'John', 'admin'];

//functional case
function Users(usernames: string[] ): void {
     if (usernames.length === 0){
        console.log('We need to find some users!');
        return;}

        for (const username of usernames) {
            if (username.toLowerCase() === 'admin') {
                console.log('Hello admin, would you like to see a status report?');
            } else {
                console.log(`Hello ${username}, thank you for logging in again.`);
            }
        }
     
}
console.log('\n for non empty user names \n')
Users(usernames);

// to make asssign empty array of usernames
usernames=[];

console.log(`\n For empty user name \n`)
Users(usernames);