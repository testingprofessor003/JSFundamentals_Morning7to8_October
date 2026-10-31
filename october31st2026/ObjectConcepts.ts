//Object:

//Defining the information in the form of key value pairs

//Inline type annotation describes the shape of the object, so TypeScript can check every key and value type

/*
    let studentDetails= {
        studentName : "Anureet",
        profession : "QA Lead",
        yearsOfExperience: 15
    }

    clg(studentDetails); //Which will print the complete Object
    clg(studentDetails.yearsOfExperience); //Will Print the value that is stored against yearsOfExperience

    //If the key is not present in the object
    console.log(studentDetails.studentAddress); --> Prints undefined

    studentDetails.studentAddress = "Chennai"; //JS will allow us to accept the data and added to the existing object
};
    
*/
let studentDetails: {
    studentName: string;
    profession: string;
    yearsOfExperience: number;
} = {
    studentName : "Anureet",
    yearsOfExperience: 15,
    profession : "QA Lead",
};

//Prints the complete 
console.log(studentDetails);

//Prints the Profession Name stored in the object
console.log(studentDetails.profession);
console.log(studentDetails["studentName"]);

//Throws Compilation Error stating that the given key does not exist
//console.log(studentDetails.studentAddress);

//In TS, we cannot add more attributes to the object at a later point of time
//studentDetails:{studentAddress: string;} = "Bengaluru";

//Throws Compilation error if we try to delete an attribute/key from the object
//delete studentDetails.profession;

//We can modify the details of an object for a particular attribute/key
studentDetails.profession="QA Director";

console.log(studentDetails);

//Prints the complete list of keys present for that particular object
console.log("Object Keys are: "+Object.keys(studentDetails));

//Prints the complete list of values present for that particular object
console.log("Object Values are: "+Object.values(studentDetails));

//Prints the complete entry details in the form of array of entries
console.log(Object.entries(studentDetails));

//console.log(Object.length());


console.log("*******".repeat(10));
//Iterate across all the key value pairs

//Returns a String array
let listOfKeys=Object.keys(studentDetails);

//Iterating across the whole array
for(let i=0;i<listOfKeys.length;i++)
{
    //Problem in typescript is that it does not know whether is of the given data types,
    //It also does not know that every kkey/string value is of that specific object or not
    //console.log(listOfKeys[i]+"---"+studentDetails[listOfKeys[i]]);

    //Whatever key that we have, we are checking whether it is part of studentDetails object or not
    // const key= listOfKeys[i] as keyof typeof studentDetails;
    // console.log(key+" ---- "+ studentDetails[key]);

    //If we want to avoid strict type checking at the time of searching for that keys
    console.log(listOfKeys[i]+"----"+(studentDetails as any)[listOfKeys[i]]);
}

let empDetails1=studentDetails;

//Returns true as both the object references are pointing to the same set of data
console.log(empDetails1==studentDetails);


