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