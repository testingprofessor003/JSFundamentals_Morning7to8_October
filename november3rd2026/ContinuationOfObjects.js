let studentDetails = {
        studentName : "Anureet",
        profession : "QA Lead",
        yearsOfExperience: 15
    }

console.log(studentDetails); //Which will print the complete Object
console.log(studentDetails.yearsOfExperience); //Will Print the value that is stored against yearsOfExperience

//If the key is not present in the object
console.log(studentDetails.studentAddress); // Prints undefined

studentDetails.studentAddress = "Chennai"; //JS will allow us to accept the data and added to the existing object

console.log(studentDetails);

//Deletes that attribute/key from the JS Object
delete studentDetails.profession;

console.log(studentDetails);

//We can modify the details of an object for a particular attribute/key
studentDetails.profession="QA Director";

console.log(studentDetails);

//Prints the complete list of keys present for that particular object
console.log("Object Keys are: "+Object.keys(studentDetails));

//Prints the complete list of values present for that particular object
console.log("Object Values are: "+Object.values(studentDetails));

//Prints the complete entry details in the form of array of entries
console.log(Object.entries(studentDetails));

console.log("*******".repeat(10));
//Iterate across all the key value pairs

//Returns a String array
let listOfKeys=Object.keys(studentDetails);

//Iterating across the whole array
for(let i=0;i<listOfKeys.length;i++)
{
    console.log(listOfKeys[i]+"---"+studentDetails[listOfKeys[i]]);
}

//Returns true as both the object references are pointing to the same set of data
console.log(empDetails1==studentDetails);
var empDetails1;

//Freezing the Object: Not additions, no deletions, no changes at all, just viewing the information

let players = {
    playerName: "Virat Kohli",
    playerCountry: "India",
    role : "Batsman"
};

console.log("**********".repeat(10));

//Freezing the object
let frozenObject=Object.freeze(players);

//Checking the Object is frozen or not
//Returns true if the above condition is satisfied else false
console.log(Object.isFrozen(frozenObject)," Frozen or not");

//TypeError: Cannot assign to read only property 'playerCountry' of object '#<Object>'
//As the object is frozen
//players.playerCountry="RCB";

//We are able to view the player country
console.log(players.playerCountry);

//TypeError: Cannot delete property 'role' of #<Object>
//As the above object is frozen we cannot delete it 
//delete players.role;

//TypeError: Cannot add property yearsOfCricketExperience, object is not extensible
//Since the above object is frozen, we cannot add new properties to it
//players.yearsOfCricketExperience=20;

console.log(players);

//Now we will check whether the given object is frozen or not
console.log(Object.isFrozen(players));

//Since the objects cannot be unfreezed , so we need to create a opy of this object to perform the next of operations

//... is also known as a Spread Operator
let newPlayersObject={...players};

console.log(newPlayersObject);

newPlayersObject.playerName="Rohit Shamrma";
newPlayersObject.role="Explosive Batsman"
newPlayersObject.noOfRunsScored=12000;

console.log(newPlayersObject);

//If the given attribute is present then only it will delete else it ignores
delete newPlayersObject.noOfRunsScored;
delete newPlayersObject.address;

console.log(newPlayersObject);

//We can delete an attribute of an object but not the object itself
//delete newPlayersObject;

//Serialization: JSON to JS Object
//Deserialization: JS Object to JSON

//Convert this JS Object into a JSON:
//Javascript Object Notation --> JSON which is a text based data format for representing the information or data
//It is not a lIVE JS Structure that we use, it is a serialization format used to transmit or store data
let jsonData=JSON.stringify(newPlayersObject);
console.log(jsonData);

//Converting the JSON to JS Object
let jsObject=JSON.parse(jsonData);
console.log(jsObject);

/*
      JS Object                                            JSON

      In Memory Object                                 String(text)

      Any valid identifier/string                      Keys must be a double quoted string
      , unquote values can be part
      of the JS Object Keys

      Functions, undefined, Symbols, Date,             Accepts only String, number, null, boolean, array, object 
      Maps/Sets, along with all primitive              (Does not accept functions)
      values

      Comments are allowed in Source Code               Comments are not allowed

      Can have functions as properties                 Cannot have functions as properties, if any function is there they get dropped during conversions
*/

let personalDetails = {

    personName: "Ravinder",
    gender:"Male",
    occupation:"QA Lead",
    yearsOfExperience:10,

    diet: function()
    {
        console.log("Follows a proper food diet");
        console.log("Eats only healthy food");
    },

    sportsActivities: function()
    {
        console.log("Active in sports");
        console.log("Plays lot of games like cricket, football, basketball");
    }
};

console.log(personalDetails);

//Prints undefined as it does not return any value
//console.log(personalDetails.diet());

personalDetails.diet();

let personalJSONData=JSON.stringify(personalDetails);
console.log(personalJSONData);

personalDetails=JSON.parse(personalJSONData);

//for in Loop --> Widely used in iterating the JS Objects

for(let key in personalDetails)
{
    console.log(key," - ",personalDetails[key]);
}

console.log("*********".repeat(10));

//Nested Objects: One object inside another

let studentInformations= {

    studentName : "Rahul Sharma",
    courseDetails: {
        courseName: "Performance Testing",
        courseDuration: 40,
        courseFee:8000
    },

    yearsOfExperience:16,
    domainsWorked:"Banking, Finance, ECommerce, Retail"

};

// Optional chaining (?.) safely reads a nested property without throwing
// if a parent (courseDetails here) is null/undefined; it evaluates to
// undefined when the property is missing instead of erroring out.

// Nullish coalescing (??) then swaps that undefined for a fallback value ("").
console.log(studentInformations.courseDetails?.topicsCovered ?? "Ravinder");

//In this case it will throw an error stating that sampels is not defined
//console.log(sampels.courseDetails.topicsCovered); 

//In this case since the samples object is not present, it will print undefined instead of throwing an error
//console.log(samples?.courseDetails?.topicsCovered);

//Another way of copying the object
let anotherCopyOfStudentInformations=Object.fromEntries(Object.entries(studentInformations));

//Object.freeze(studentInformations);

//Since both the objects are pointing to different object references
console.log(anotherCopyOfStudentInformations == studentInformations); //false

//Similar to .freeze() we have another concept called as .seal()

let sealedData=Object.seal(studentInformations);

//Object.seal will allow viewing and modification of data but we cannot add new attributes or delete attributes

console.log(sealedData.courseDetails);

//Since this is a nested object so data will be added
sealedData.courseDetails.trainerName="ABCD";
console.log(sealedData);

delete sealedData.courseDetails.trainerName;

//TypeError: Cannot add property companyName, object is not extensible
// sealedData.companyName="Google";
// console.log(sealedData);


//TypeError: Cannot delete property 'studentName' of #<Object>
//delete sealedData.studentName;
//console.log(sealedData);

console.log(sealedData);

//Objects.freeze() and Object.seal() will work at the object level not at the nested object level