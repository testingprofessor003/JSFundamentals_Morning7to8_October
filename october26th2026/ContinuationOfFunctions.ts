//Changes to be made in settings.json file, when we want to run from Code Runner
/*
    "code-runner.executorMap": {
        "typescript": "cd $workspaceRoot && npx tsc --noEmit && node $fullFileName"
    },
    "code-runner.runInTerminal": true
*/

//Named Functions: Which is like your regular functions that is being used day to day
function sumOfNumbers(a:number,b:number):number
{
    return a+b;
}

console.log(sumOfNumbers(40,90));
//console.log(sumOfNumbers("Hello","World"));

//Var is a function scoped variable meaning it can be accessed anywhere within the function
//Var supports redeclaration and reassignment of variables

function sampleData()
{
    var message:String="Hello World";

    console.log(message);

    if(message.length>0)
    {
       var message:String=message.repeat(2);
        console.log("Repeated Message, ",message);

        message="New Reassigned Value";
        console.log(message);
    }
}

sampleData();
//console.log(message); //Throws a compilation error stating it cannot find the variable

//var supports hoisting, please try it in .js file not it .ts file else it throws a compilation error

firstNumber=100;
console.log(firstNumber);
var firstNumber:Number

//let:
//1. Widely used in Modern JS and TS
//2. Supports Block Scoped
//3. Does not support redeclaration but supports reassignment

function newProductOfNumbers(c:number,d:number):number
{
    let sampleData:number=400;

    if(sampleData==400)
    {
        let anotherData:number=29990;
        console.log(anotherData);
    }

    //Cannot Redeclare a block scoped variable
    //let sampleData:number=499;

    //Below line throws an error if we are trying to access the variable which is present inside another block
    //console.log(anotherData);

    return c*d;
}

console.log(newProductOfNumbers(40,20));


//Function Expression:
//Function created without a name

//If the function is created accepting numeric values, then it will expect only numeric values
//else it will throw compilation errors

//Unlike JS, it will not accept more than the arguments or lesser than the arguments provided to the function
let storedFunction=function(a:number, b:number):number {
    return a/b;
}

//console.log(storedFunction("Hello",20));
//console.log(storedFunction(50,30,50));

console.log(storedFunction(50,90));