//Function:

//Block of code enclosed within a section where we can reuse it multiple number of times

//Difference between Parameter and an argument:
//Parameters are something that we declare them at the time of function/method creation
//Arguments are something, where we pass the values to the method at the time of method calling, so that at the time of the execution those values will be considered

//Syntax of a function:
/*
function functionName(any parameters to be passed)
{
    //Block of code to be executed
}
*/

function sample()
{
    console.log("Hello World, This is my first function");
}

//Call a function inside a JS/TS File
sample();
console.log(sample); //Prints the function name called as "sample"

//This is used to compile the typescript file and it will generate an equivalent .js file
//npx tsc october22nd2026/FunctionsConcepts.ts
//node october22nd2026/FunctionsConcepts.js