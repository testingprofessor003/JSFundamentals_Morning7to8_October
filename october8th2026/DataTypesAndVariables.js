//What is a data type?

//Data type is an attribute of a piece of data which we tell the computer system or the OS to let them know
//know what kind of value is being stored. What kind of operations can be performed, how much memory it requiures and how it should be represented in binary language

//Data types are classified into two types:

//1. Primitive Data Types : Foundational Data types with which the language has been built initially
    
//Primitive Data Types are immutable in nature by default
//Different Primitive Data Types:
//1. String --> Any sort of text which we will be represented within '' or ""
//2. number --> Any whole number or real number will be accepted
//3. boolean --> Accepts true or false
//4. bigint --> If we want to access the values beyond the range of Number
//5. undefined --> We have declared a variable, but no value is associated to it
//6. null --> Absence of any object value
//7. symbol -->Unique Identifier which is majorily used in Objects

//2. Non Primtiive Data Types:

    //Object, Arrays, Map, WeakMap, functions, Class, Set etc..............
    //Mutable by default


//Variable name can follow camelCase Syntax
//Syntax of declaring a variable:
//var variable_name=value;

//Rules to be followed while declaring a variable name:
//1. It shall start with a small letter
//2. it shall not start with a number or capital letter or a special character or data ($,%,^,*)
//3. It shall not have any white spaces between the variable names 
//4. It shall not use any javascript keywords as the variable names

var firstVariable=400;
var secondVariable=1994;
var thirdVariable=true;
var fourthVariable='News of informations';

var fifth_variable; //Since no value is stored in the variable when we try to access this variable it will print undefined

//Throwing an error as we are using the JS Keyword as part of the variable names
//var for;

console.log(firstVariable,"",secondVariable,"",thirdVariable,"",fourthVariable);

//"+" has two types of behaviours:
//1. Add the values
//2. Join/Combine the data
console.log(firstVariable+secondVariable+fourthVariable+thirdVariable);

console.log(firstVariable+"90");

//Instead of "+" symbol if we use - that is subraction then whatever the data that is present in the string will be automatically convereted to numeric value
console.log(firstVariable-"100");
console.log("800"-"100");

//It will follow BODMAS Rule while performing the operations
//BODMAS Stands for Bracket of division multiplication addition subraction
console.log("900"-"200"*"400"); //-79100

//Prints NaN (Not a Number)
//On the left hand side if it is a String value like "Hello World" and on the right hand side it is a numeric value
//and we use "-", "*" or any sort of mathematical operations it will consider as NaN
console.log(fourthVariable+firstVariable-900);

//undefined+400 --> NaN 
console.log(fifth_variable+firstVariable);

var tenth_variable=400;
var eleventh_variable="Hello World!";
//This is used in the situations where we want to provide a warning of the situration encountered
console.warn((tenth_variable-900)+eleventh_variable);

//JS is a dynamically typed programming language meaning no data type is associated with the variable name
//Other programming languages follow the same trend are python, ruby, rust

//JS is 100% RunTime Programming language --> Any sort of errors that will encounter will be shown only during the code execution time
//In JS we will not see any sort of compilation errors or syntax errors unlike Java, C#

var twelth_variable=false;
var thirteenth_variable=50.24;

//Whenever we are using any sort of boolean values for arithmetic operations 
//false - 0, true - 1
console.log(twelth_variable+thirteenth_variable);
