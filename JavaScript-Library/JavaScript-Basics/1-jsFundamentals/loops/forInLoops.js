/*
For in loops are great for iterating over values in an object.
Properties in objects are what's called enumerable

-For in loops iterate over an object's enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}
//place holder of item, a keyword of in 
//item is grabbing the key on each object
for(item in student) {
    console.log(item);
    console.log (student[item]);

}
//if we comment out console log,(item), it will grab the 2nd console.log
// whenever we create an array, you can think of it like
/*
0:"tabby,
1:"british short hair",
2:"burmese"
*/
let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

for (cat in catArray) {
console.log(cat)
console.log (catArray[cat])
}

//Challenge: write a for in loop that 
//capitalizes the first letter of a name and lowercases the rest of the name
//undefined that you plan on filling
let myName=["NaLA"];
let capName;
for (let l in myName) {
    if (l==0) {
        capName = myName[l].toUpperCase();
    } else {
        capName+=myName[l].toLowerCase();
console.log(capName);
    }
}