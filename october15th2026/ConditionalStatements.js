//Conditional Statements:

//Checking if a given condition is satisfied or not

var j1 = 400;

// == is used when i want to compare the values present on the left hand side and the right hand side are same or not
//Returns true if the above condition is satisfied else false

if (j1 == 400)  //If the condition is satisfied then it will execute the block of code that is present inside
{
    console.log(j1);
}

if (j1 == 300) {
    console.log(j1 + j1);
}

else //Gets executed only when the condition is not satisfied 
{
    console.log("Please check the conditoin that you are trying to perform");
}

console.log("***********".repeat(10));

//String() --> Converting the value to a string
// == will just validate whether the value is matching on both the sides irrespective of the data type (In JS Only)
if (String(j1) == 400) {
    console.log("Data is matched whose value is 400");
}

else {
    console.log("Data is not matched and the actual value is: " + j1);
}

console.log("************".repeat(10));

// ===. means it will do a strict equality check meaening it will check the value along with the type of data
if (String(j1) === 400) {
    console.log("Data is matched whose value is 400");
}

else {
    console.log("Data is not matched and the actual value is: " + j1);
}

console.log("************".repeat(10));

var anotherData="500";
var secondData=1000-500

//Number() --> WIll convert the value to of Number Data Type
//&& is an "and" condition where it executes the code inside the "if" block only when all the conditions are satisfied
if(Number(anotherData) === secondData && anotherData%5 == 0)
{
    console.log("Both the conditions are satisfied");
}

else 
{
    console.log("Both the conditions are not satisfied");
}

console.log("*********".repeat(10));

//In JS we have the concept of Truthy and falsy values
//Falsy Values in JS: 0, null, undefined, 0n, false, -0, "", NaN
//Rest of them are truthy values
console.log(Boolean("500"));

console.log(Boolean("500"-"500"));

//% --> Fetching the remainder of the number, when we are performing the division operation
//|| --> Represents an OR Condition where it checks either one of the condition is satisfied
if((Number("1000")-String(40.12)+Boolean("0"))%4 == 0 || "Hello World".length%3==0)
{
    console.log("Another set of conditions are satisfied");
}

else 
{
    console.log("Waiting for next set of conditions to be validated");
}

console.log("*******".repeat(10));

//Prints the minimum and Maximum values that the Number data type can hold
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

var beyondMaxNumber=9007199254740999;

//! --> THis is known as NOT Symbol
//Meaning if it returns true it changes to false
//Meaning if it returns false it changes to true

//beyondMaxNumber%7 --> Return a remainder greater than zero
//beyondMaxNumber%3 --> Returns a remainder as zero

//Boolean(beyondMaxNumber%7) == true

//Boolean(0+true) ==> true
//(!(true == true)) ==> false
if(!(Boolean(beyondMaxNumber%3 + Boolean(beyondMaxNumber%7)) == true))
{
    console.log("COnditon Eventually not satisfied");
}

else 
{
    console.log("Condition satisfied here");
}
