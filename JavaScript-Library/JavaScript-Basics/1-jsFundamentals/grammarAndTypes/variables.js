/*
-Variables are named container for storing data values
-We name the variables so that we can refer to them and the values they hold at a later time.
Grab the name associated to that name container
var is outdated to declare variables
best practice-let and const
= will be the assignment operator
*/

let a = 2;

/*
(1)      (2)     (3)     (4)
let       b       =       2

1.JavaScript keyword to denote the creation of a variable.
2.Name of the variable in which the developer refers to in order to grab the value stored.
3.Assignment operator.
4.The initial value
*/

//The declaration is to the left of the assignment operator (=)
//This is where the variable is created, by utilizing a designated JavaScript keyword(var, let, const)and giving it a name.
// let x; this alone is a variable declaration, we dont have to give it a value,(unassigned value) which will make it an undefined value.

let s;
// underfined value

//The initialization is to the right side of the assignment operator (=)
//This is where the developer sets the value for the declared variable.
//Only const you need to assign a value
//Example:
//     (1)
let x=10;

//1.Initialization


let y;
console.log("Declaration:", y);
//we are noting that it is a declaration

//assigned variable
y=10;
console.log("Initialization", y);

y=35;
console.log("Initialization 2", y);

//java script reads left to right, top to bottom.

/*
IF you utilize const you have to initialize a value, 
with let or var is NOT required
So say you want to execute 
the value of const cannot change
const y;
console.log("Declaration", y));


It will reat that Syntax has an error, which will have a missing initializer in const declaration
*/