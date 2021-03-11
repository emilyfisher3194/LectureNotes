/*
Acts as a shortcut to writing if, if else, and else/if statements

*/

let num= 6;

//ternary
(num > 0) ? console.log ("yes") : console.log("no")

//question mark(?), stands for if, and : else
//condition doesnt have to be in parentheses so it could be num >0


//instead of
if (num > 0) {
console.log ("yes");
} else {
    console.log("no");
}

//we can have multiple ternary

(num==0) ? console.log ("Hello") : (num <0) ? console.log ("hi") : console.log("goodbye")
//( num > 0) ? console.log("Hi") : console.log ("Goodbye")

/*
Age Challenge (if else):

    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }

    */
// ? IF, : ELSE
    let age = 30;
    (age>=25) ? console.log ("Yay! You can rent a car!") : (age>=21) ? console.log ("Yay! You can drink!") : (age>=18) ? console.log ("Yay! You can vote!") :
    console.log("Sorry, you're too young to do anything fun.")

