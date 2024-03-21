// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// function to create object

function createFruit( name:string, colour:string, taste:string)
{
  return  {
    name,
    colour,
    taste,
};
}
//Create an array of fruits
const fruits=[
    createFruit("Apple","Red","Sweet & Sour"),
    createFruit("Banana","Yellow","Sweet"),
    createFruit("Strawberry","Red","Sour")
];

// Intentional index error
const invalidIndex=10; // There are only 3 elements in array
console.log(`Fruits at index ${invalidIndex} :`,fruits[invalidIndex]);

//Prints the fruits
fruits.forEach(
    (fruit) =>{
        console.log(`Name: ${fruit.name}, Colour: ${fruit.colour}, Taste ${fruit.taste}`);
    }
);
