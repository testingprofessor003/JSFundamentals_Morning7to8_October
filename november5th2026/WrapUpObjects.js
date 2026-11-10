let sampleDetails = {

    name:"Sushmita",
    profession: "QA Engineer",   
}

//We cannot add any sort of new property to the existing object
let preventExtensibleObject=Object.preventExtensions(sampleDetails);

console.log(preventExtensibleObject);

//TypeError: Cannot add property designation, object is not extensible
//preventExtensibleObject.designation="QA Manager";

preventExtensibleObject.name="Ravinder";
console.log(preventExtensibleObject);

//Returns true if the object is not extensible else false
console.log(Object.isExtensible(preventExtensibleObject));

console.log("*****".repeat(10));

//Object Destructuring:
//It allows us to unpack the properties of an object directly into seperat variables

let {name,profession} = preventExtensibleObject;

console.log(name,"  ",profession);

//Instead of using the key names present in the JS Object, we are using our own variable names
//If the key empCountry is already prseent in the object, it will take that else it will take the default value
let {name: empName, profession:empProfession, empCountry="India"} = preventExtensibleObject;

console.log(empName,"  ",empProfession," ",empCountry);

//Want to use the concept of Object Destructuring at a function level:

function greet({name:empName, profession:empProfession, empCountry="USA",empSalary})
{
    console.log("Hello Mr. / Mrs. ",empName, "Congrats on becoming a ",empProfession," in",empCountry);
    console.log("Current Salary is: ",empSalary);
}

greet(preventExtensibleObject);

sampleDetails = {

    name:"Sushmita",
    profession: "QA Engineer",   
}

//Checks if the key exists in the object or not
//Returns true if the above condition is satisfied else false
console.log(Object.hasOwn(sampleDetails,"empCountry"));
console.log(Object.hasOwn(sampleDetails,"name"));

//Object.defineProperties --> Will Help us define/add properties for all the keys in the object with fine grained control
//writable --> can the value be changed after creation
//enumerable --> will the property show up during Object.keys() / for-in loops
//configurable --> can the property be deleted

let iplMatches={};

Object.defineProperties(iplMatches, {
    homeTeam: {value:"Bengaluru", writable:true, enumerable:true, configurable:false},
    awayTeam: {value:"Kolkata",writable:false,enumerable:true,configurable:true},
    ground: {value:"Chinnaswamy Stadium",writable:false,enumerable:false,configurable:false}
})

console.log(iplMatches);

//TypeError: Cannot assign to read only property 'awayTeam' of object '#<Object>' as the writable value for this key is false
//iplMatches.awayTeam="Chennai";

//TypeError: Cannot delete property 'homeTeam' of #<Object> as the configurable property for this key is false
//delete iplMatches.homeTeam
//console.log(iplMatches);

console.log(Object.keys(iplMatches));

//Prints all the keys present for that object including the non-enumerable ones
console.log(Object.getOwnPropertyNames(iplMatches));

//Prints the complete details of descriptors for each and every key 
console.log(Object.getOwnPropertyDescriptors(iplMatches));

//Prints the descriptor details for that particular key only
console.log(Object.getOwnPropertyDescriptor(iplMatches,"ground"));

//Returns false as these represent two different objects as the memory address is different for different objects
console.log({} === {});

//Object.assign(): Copies/Merges all the enumerable properties from one or more source objects into a target object

let battingStats= { runsScored:9000, matchesPlayed:500};
let bowlingStats= {wicketsTaken:100, economy:10.0};

//First Argument is the target object, remaining ones are source objects
let careerStats=Object.assign({},battingStats,bowlingStats);
console.log(careerStats);

//Suppose if the same keys are present in both the objects, value present on the right most side will be taken
let updatedStats=Object.assign({},battingStats,{runsScored:15000});
console.log(updatedStats);