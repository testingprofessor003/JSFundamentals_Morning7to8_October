//String:
//Set of characters which can be enclosed within '' or "" (In JS/Python only we can enclose them in '')
//Characters can be alphabets, numbers, special characters and a white space

//Except during the time of assignemnt of variables, it executes from right to left as we need to store data to the variables 
var firstString="New String Data that we are working on";

console.log(firstString);

//Prints the total number of characters present in the string
console.log(firstString.length);

//Converts String to uppercase
console.log(firstString.toUpperCase());

//Converts String to LowerCase
console.log(firstString.toLowerCase());

//Checks if the given string starts with the word "New"
//Returns true if the above condition is satisfied else false
console.log(firstString.startsWith("New"));
console.log(firstString.toUpperCase().startsWith("New String"));

//.concat is used to join the data with other set of strings
console.log(firstString.concat(400-500+200));
console.log(firstString.concat(400-500+200).startsWith(400));

console.log(firstString.startsWith(firstString));
console.log(firstString.startsWith("New String DaTa"));

firstString=firstString.concat(" Hello World JS");

//Checks if the string contains the word "Hello"
//Returns true if the above condition is satisfied else false
console.log(firstString.includes("Hello"));
console.log(firstString.includes(firstString.startsWith("Hello")));

//Throws TypeError as we are trying to operate string functions on a boolean variable
//console.error(firstString.toLowerCase().concat(" TS and JS Are brothers").includes("are").concat("Yes It Is"));

//Variable Reassignment --> Storing different value to the same variable at a later point of time
firstString="New String Data that we are working on";
//Repeats the same string for 5 times
console.log(firstString.toUpperCase().repeat(5));
console.log(firstString.repeat(3).includes("JSNewString"));
console.log(firstString.repeat(3).includes("onNew String"));

//Prints the character at 4th index position
//When we say the word "Index Position", we start counting the characters from zero
console.log(firstString.charAt(4));
console.log(firstString.charAt(10));
console.log(firstString.charAt(30));

//Even if we are trying to access a chracter beyond a length of the string, it just print an empty value
console.log(firstString.charAt(500));
console.log(firstString.charAt(-500));

//Reads the string from the reverse order and prints the character present in 10th position from the right
//.at() is similar to .charAt() but supports -ve index positions
console.log(firstString.at(-10));