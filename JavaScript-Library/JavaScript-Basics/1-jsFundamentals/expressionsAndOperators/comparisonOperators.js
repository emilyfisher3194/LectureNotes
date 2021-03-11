//Equal To- compare values fromthe right hand side to the left hand side
//non-strict check for the value alone to match
//if we use 2 equal sdes, it does not care about dats type
let equalTo="3"==3;
console.log(equalTo);


//Strict Equals To
//Strict checks for data type as well as the value
//checks data type, thats why is returns false
let strictEqualTo="3"===3;
console.log(strictEqualTo);

//Not Equal To

let notEqualTo=3 !="3"
console.log(notEqualTo)

//one is a data and one is a string thats why they arent equal
//Strict Not Equal To
let strictNotEqualTo=3 !=="3";
console.log(strictNotEqualTo);


//Greater Than
let greaterThan =4>3;
console.log(greaterThan);

//Less Than

let lessThan = 33<100;
console.log(lessThan);

//Greater Than Or Equal To
let greaterThanOrEqualTo = 3>=2
console.log(greaterThanOrEqualTo);

//Less Than or Equal To
// < goes first then = otherwise it is an error
let lessThanOrEqualTo = 2<=3;

// And Operator
// everytime you want to use 2 conditions each side of the & its a different condition.
//It separates the two
2+2 && 3+3

//Or

2||3