//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const photoFrames =
{
   length :"12*12",
   width :"6*6",
   description :" Family photo frame ",
   price :"3000 Rs "
};


// Array of objects

let photo:Array <typeof photoFrames>=[];

// add multiple objects in array
photo.push(photoFrames)
photo.push({length:"10*10",width:"5*5", description:" Family photo frame", price:"2000 Rs" });

let photoFrames3={
    length :"11*11",
    width :"5*5",
    description :" Family photo frame ",
    price :"2500 Rs "
};
photo.push(photoFrames3);
console.log(photo);