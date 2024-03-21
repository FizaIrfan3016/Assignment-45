//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}

// Creating a large shirt with default message
make_shirt();

// Creating a medium shirt with default message
make_shirt("Medium");

// Creating a shirt of any size with a different message
make_shirt("Small", "Keep coding!");
