//Hoisting is nothing we are trying to access the variable, before it has been declared 
//Prints undefined if we try to print that variable before declaring them
console.log(firstNumber);
var firstNumber;

function newProductOfNumbers(c,d)
{
    let sampleData=400;

    if(sampleData==400)
    {
        var anotherData=29990;
        console.log(anotherData);
    }

    //Below line throws an error if we are trying to access the variable which is present inside another block
    console.log(anotherData);

    return c*d;
}

newProductOfNumbers(40,20);

//In JS for the functions, if you do not pass the exact number of arguments required also, it will still execute the program based on the variables passed
//Since JS Does not support any type based vareiables, so any kind of data types can be taken into the picture
let storedFunction=function(a, b) {
    return a/b;
}

console.log(storedFunction("Hello"));
console.log(storedFunction(500));