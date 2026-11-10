//What do you understand by the concept of Array?
//Array is nothing but collection of values which can be in heterogenous nature for JS
//But when we are working for TS we need to specify the exact type of data that we are storing
//Size is not fixed here, can be increased or decreased as per the need

let sampleArray:any[]=[50,100,true,false,"Hello","World",0];
console.log(sampleArray);

let specificArrayType:string[]= ["Ramesh","Suresh","Mahesh","False","true"];
console.log(specificArrayType);

//Prints the size of the array
console.log(specificArrayType.length);

//Prints the value that is present at 4th index position
console.log(specificArrayType.at(4));

console.log(specificArrayType.concat("ConcatOne","ConcatTwo","ConcatThree","Ramesh"));

//Accessing the value that is present at 10th index position
//Prints undefined if we try to access the value beyond the size of the array
console.log(specificArrayType[10]);

//IN TS or JS we can add the values to the array at any index position
//If we are adding a value beyond the index position then empty items will be created
specificArrayType[900]="Hello World";

console.log(specificArrayType);

//Prints the index position of the first occurence of the given value
//console.log(specificArrayType.findIndex("Ramesh"));

//Here we provide the initial capacity of the array as 10
//let anotherWayOfCreatingArray:(number | string)[] --> Accepts a number or string values in the array
let anotherWayOfCreatingArray:(number | string)[]=new Array(10);

//Fills the complete array with value as 400
anotherWayOfCreatingArray.fill(400);

console.log(anotherWayOfCreatingArray);

anotherWayOfCreatingArray[50]=900;

console.log(anotherWayOfCreatingArray);

anotherWayOfCreatingArray.fill(Number("15000"));
console.log(anotherWayOfCreatingArray);

let fourthArray:(string|boolean)[]=new Array(10);

fourthArray.fill("900");

//Adding the values to the end of the array
fourthArray.push("Basketball","Football","Cricket");

console.log(fourthArray);

//Removes the last value present in the array
let removedData=fourthArray.pop();
console.log(removedData," Removed data");

console.log(fourthArray);

//Adds the values at the start of the array
fourthArray.unshift("First","Second","Third");

console.log(fourthArray);

//If we try to perform .shift() or .pop() on an empty array it returns undefined
//Removes the value present at the start of the array
let firstData=fourthArray.shift();

console.log(firstData);

console.log(fourthArray);

//Reverses the data present in the array
//In Place Reversal 
console.log(fourthArray.reverse());

console.log("*******".repeat(10));

let nextArrayForSearching:number[]=[900,200,100,900,500,200,-500];

//Prints the index position of the first occuerence of the given value in the array
//else returns -1 if the value does not exist in the array
console.log(nextArrayForSearching.indexOf(900));
console.log(nextArrayForSearching.indexOf(1000));

console.log(nextArrayForSearching.indexOf(100));

//Prints the index position of the last occurence of the given value in the array
//else returns -1 if the value is not present in the array
console.log(nextArrayForSearching.lastIndexOf(900));

//Want to print the second occurence of 900 that is present in the given array 
//In this case, from the first iindex position, print the first occurence of the value 900
console.log(nextArrayForSearching.indexOf(900, nextArrayForSearching.indexOf(900)+1));

nextArrayForSearching=nextArrayForSearching.concat(900,400,500,1000,200,100-500);

console.log(nextArrayForSearching);

console.log(nextArrayForSearching.indexOf(-400));

//Sorts the array in ascending order
console.log(nextArrayForSearching.sort());

console.log(nextArrayForSearching);

console.log("******".repeat(10));

let sampleSentence:string = "Apple a day, keeps a doctor away";

//splits the sentence on the basis of white space and returns a string array
console.log(sampleSentence.split(" "));
console.log(sampleSentence.split("a"));

let splitData:string[]=sampleSentence.split(" ");

//Sorting of data happens as per the ASCII Values of the data present
console.log(splitData.sort());