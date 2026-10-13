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