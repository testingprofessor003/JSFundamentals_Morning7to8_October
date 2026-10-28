//Callback Function:
//Calling another function inside another function

//In this function, we are passing a function as an argument
//operation:any --> It accepts any kind of data type
function mathematicalOperations(a:number,b:number,operation:any):number
{
    return operation(a,b);
}

let addNumbers = (a:number,b:number) => a+b;

console.log(mathematicalOperations(50,200,addNumbers));

console.log(mathematicalOperations(40,90,(a:number,b:number) => a*b));

console.log(mathematicalOperations(50,90,(a:number,b:number) => a/b));

//Nested Callback: Calling one more callback inside another callback which led to the concept
//of callback hell or pyramid of doom
