var sampleData='Second Session about the strings concepts';

console.log(sampleData.length);
console.log(sampleData.charAt(30).toUpperCase().repeat(5));

//Replaces "e" with "_" (IN JS it replaces only the first occurence of "e")
console.log(sampleData.replace("e","_"));

//Replaces all the occurences of "e" with "_"
console.log(sampleData.replaceAll("e","_"));

//Prints the string starting from 5th index position till 10th index position
//Inclusive of start index position and exclusive of end index position
console.log(sampleData.substring(5,10));

//Prints the string starting from 19th index position till the end
console.log(sampleData.substring(19));

//Prints the string from 40th index position till the length of the string as 80th index position is beyond the length of the string
console.log(sampleData.substring(40,80));

console.log(sampleData.substring(37,100));

//Prints the string starting from 10th index position till 42nd index position
//In this case, starting and end index positions are reversed
console.log(sampleData.substring(42,10));

//Prints empty as the starting index position and the end index position are greater than the length of the string 
console.log(sampleData.substring(400,900));
console.log(sampleData.substring(500));

//Prints the complete string if we are accessing a wrong index position
console.log(sampleData.substring(-30));

//In this case it will be empty as the starting and end index positions are way out of the size of the string
console.log(sampleData.substring(-40,-20));

//ASCII Value is something that a system can understand as Hardware understands only 0's and 1's
//Prints the ASCII Value of the character present at 6th index position

sampleData='Second Session about the strings concepts';
//Common ranges of ASCII Values are:
//0-9 = 48-57
//a-z = 97-112
//A-Z = 65-90
// =32
console.log(sampleData.charCodeAt(6));

//Prints the first occurence of 'o' in the given string
//if the given data is not present in the string it returns -1
console.log(sampleData.indexOf('o'));
console.log(sampleData.indexOf('z'));
console.log(sampleData.indexOf("conceptss"));

//In this case instead of starting the string from 0th index position, we are starting from a different index position
console.log(sampleData.indexOf('e',sampleData.indexOf('e')+1));
console.log(sampleData.concat(" are about sessions").indexOf("sessions"));

sampleData='Second Session about the strings concepts';

//Prints the last occurence of 'e'
//Returns -1 if it does not exist
console.log(sampleData.lastIndexOf('e'));

sampleData="         New Set of InformatiONS.       ";

//Removes the whitespaces present before and after the string
console.log(sampleData.trim());

//Removes the whitespaces present at the start of the string
console.log(sampleData.trimStart());

//Removes the whitespaces present at the end of the string
console.log(sampleData.trimEnd());

sampleData="Age of the person is 18, Sector is 52";

//In the above string, want to extract only the numbers
console.log(sampleData.match("[a-z]"));
console.log(sampleData.replaceAll("[a-z]",""));

sampleData="New Sets of Informations to be proceessed";

//.slice() --> It is also similar to .substring() but if we pass a -ve value it will read the string from right to left
console.log(sampleData.slice(-7,-5));
console.log(sampleData.slice(3,-6));

//If the start index position is greater than end index position it will return a blank string
console.log(sampleData.slice(-9,-20));

//From ES6 Onwards, we are able to use multi line strings

//Old way of declaring the string with multiple lines 
sampleData="JavaScript is one of the most widely used programming languages in the world today. It was created in 1995 by Brendan Eich in just ten days, and it was originally built to make web pages interactive. Over the years the language has grown far beyond the browser, and today it runs on servers, mobile applications, desktop applications and even small embedded devices"+"\n"
+"Strings are one of the most important data types in JavaScript. A string is simply a sequence of characters enclosed within single quotes, double quotes or backticks. Every character in a string has an index position that starts from 0, and the total number of characters can be found using the length property"+"\n"
+"JavaScript provides a rich set of built-in methods to work with strings. We can use charAt() to read a character, indexOf() and lastIndexOf() to search for a value, substring() and slice() to extract a part of the string, replace() and replaceAll() to change the content, trim() to remove unwanted whitespaces and repeat() to duplicate the data. Strings are immutable, which means that none of these methods change the original string; they always return a new one."+"\n"
+"Understanding these string concepts clearly is very important for every automation tester, because test data, locators, URLs, error messages and API responses are almost always handled as strings."+"\n";

//Template literals (backticks) preserve the line breaks, so a big paragraph can be written across many lines
sampleData=`JavaScript is one of the most widely used programming languages in the world today. It was created in 1995 by Brendan Eich in just ten days, and it was originally built to make web pages interactive. Over the years the language has grown far beyond the browser, and today it runs on servers, mobile applications, desktop applications and even small embedded devices
Strings are one of the most important data types in JavaScript. A string is simply a sequence of characters enclosed within single quotes, double quotes or backticks. Every character in a string has an index position that starts from 0, and the total number of characters can be found using the length property
JavaScript provides a rich set of built-in methods to work with strings. We can use charAt() to read a character, indexOf() and lastIndexOf() to search for a value, substring() and slice() to extract a part of the string, replace() and replaceAll() to change the content, trim() to remove unwanted whitespaces and repeat() to duplicate the data. Strings are immutable, which means that none of these methods change the original string; they always return a new one.
Understanding these string concepts clearly is very important for every automation tester, because test data, locators, URLs, error messages and API responses are almost always handled as strings.`

console.log(sampleData);

//Prints the total number of characters present in the big paragraph
console.log(sampleData.length);

//Prints the number of lines present in the paragraph by splitting the data on the new line character
//sampleData will return an array of String Values
console.log(sampleData.split("\n").length);

//Checks whether a particular word is present in the paragraph
console.log(sampleData.includes("immutable"));
console.log(sampleData.indexOf("Strings"));

