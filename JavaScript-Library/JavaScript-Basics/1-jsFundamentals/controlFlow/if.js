/*
Falsy Value
- value that it is considered false when encountered in a boolean context.there are 6 specific value 
    -fakse
    -0
    -"",'',`` (empty strings)
    -null
    -undefined
    -NaN(not a number)

-This means that when JavaScript is expecting a boolean and it is given one of values above, 
it will always evaluare to "falsy" rather than true values
*/
//if executes the true
let isOn = true;

if (isOn) {
    console.log("TheL Light is On");
}
//boolean value
//if statement


isOn=false

if (isOn==false){
    console.log("The Light is off");
}
//if keyword, parentheses hold the condition, and curly brackets{}
// will execute the condition

//exclamation will change it to false

//if (isOn) {
//    console.log ("the light is off")
// }

let weather = 55;

if (weather <70){
console.log("Wear a jacket!");

}