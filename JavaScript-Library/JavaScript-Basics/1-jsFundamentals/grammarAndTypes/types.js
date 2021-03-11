//*** 
/*
Booleans
-Are True or False values
-Theres only two values
*/

let on = true
console.log (on)


let off= false
console.log(off)

/*
NULL
-Empty value, its like an empty bucket it has the capacity to be filled, but it currently is not.
-intentional empty value
null is found mostly on errors, null versus undefined, null is an intentional empty value. We tell developers that we want that value to be empty.
we are telling them we want this value to be empty
*/

let emptyBucket=null
// you can comment this out  //emptyBucket='water' and it will let you know that it is null
emptyBucket= 'water'
console.log(emptyBucket)
// Null and undefined are completely different

/*
UNDEFINED
-Currently has no value assigned
-accidental empty value
-Acts as the means (plastic/metal) to create the bucket
undefined is what we dont know what to do.
*/
let metal; //correct way to assign undefined
//variable
console.log(metal)

let metals=undefined; //WRONG way, it is redundant
//to initialize if its not defined

//NUL VS UNDEFINED
//**********
//Null is like an empty bucket is there but theres nothing in it.
//Undefined is like the materials we will use to create the bucket.

//We can also think of these two variables as pizza boxes
//Null is like the empty pizza box, just waiting for a pizza
//Undefined is like the unassembled box, waiting to get assigned a variable

let emptyBox=null
let unassembledBox;

/*
NUMBERS
-In JS numbers are just numbers
You can add, substract, multiply and divide
You can use decimals
*/

let degrees=90;
console.log(degrees)
// will console.log as 9999999999999
let precise=999999999999999
console.log(precise);

//will console.log as 100000000000000
let rounded=9999999999
console.log(rounded)

//will console.log() as 0.300000000000004
let notQuite= 0.2 + 0.1
console.log(notQuite)

//Function to convert a string to numbers IF that string is a number , if you put in the parrentheses,
// (LID), JS will indicate NaN which means Not a Number
let a = Number('123')
console.log(a)



/*
STRINGS
-Any value in between a set of quotes or back ticks
- Can be noted by ' ', "", ``
-'string' ==="string"=== `string` They are the same thing
*/

let stringOne = "doublequotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo)

//Add Strings together
//Numbers VS Strings

let addition = 1050 + 100
//    ^ variable
//^this wi;; allow you to add two things together. =1150
console.log(addition)
let concatenation = '1050' + '100'

// concatenation will allow you to add two things together
// the two strings will be "smushed" together so it will read 1050100
//JS will cap of both together as a string if one string and number is combined.
console.log(concatenation)

//you will strill get the two strings together it will convert the number to a string and will cap them together as a string
//let concatenation1 - '1050' + 100
console.log (concatenation1)


//used if you want to check if it is a number or a string
console.log(typeof addition)
console.log(typeof concatenation)

/*
OBJECTS
-Can be denoted by {}
-Objects store 2 things, a key and a value
We can access these values, by digging into the object with dot notation - object.value
*/


// Say we want to create an app like spotify
// We want to take in an artists name, amount of albums they've produced
// all members are still alive?

let artist = {
    //key   //value
    name: 'Queen',
    albums:15,
    allMembersAlive:false
}

console.log(artist)
//Example of Dot notation
console.log(artist.allMembersAlive)
console.log(typeof artist.name)

// (typeof artist)- will come as an object, where as typeof artist.name whill come out as a string

//how to add to object
artist.songName= 'I want it all'
console.log(artist)

//how to change an object's value
artist.songName= 'Bohemian Rhapsody'
console.log(artist)



/*
ARRAYS

let list = [ 'item1'  ,  'item2',  'item3'   ]
               (0)          (1)      (2)

-Denote by []
each of the values in the array are objects
because the numbers associated with the array are 'keys'
You can access a value by digging into the array with array [0]
Its coming up as an object because it is a special type of object
This is more advanced, but an interesting fact with JavaScript. There are only six things in JS that are NOT object. Those six things are: null, undefined, strings, numbers, boolans, and symbols

*/

let burritos = ['large', 4, true]

console.log (typeof burritos)


//ADDITION VS CONCATENATION
//Addition is adding numbers together
//Concatenation is adding strings together


let add= 100+100
console.log (add)

let concat='Emily'+'Fisher'
console.log(concat)

let stillConcat = '1050' + 100
console.log(stillConcat)

//Challenge: set each variable to its respective type.
//console.log your whole address witha space between variables.
//try to change the whole addess to use 'string interpolation'

//String Interpolation `${variable}`
console.log(`${street}`, )
//Object with dot notation
