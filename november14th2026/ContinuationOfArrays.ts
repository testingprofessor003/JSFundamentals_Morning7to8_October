import { PlayersWithParameterizedConstructor } from "./ConstructorConcepts.ts";


let playerDetails: PlayersWithParameterizedConstructor[]
        = [
            new PlayersWithParameterizedConstructor("Rohit Sharma","India"),
            new PlayersWithParameterizedConstructor("Quinton De Kock","South Africa"),
            new PlayersWithParameterizedConstructor("Tilak Verma","India"),
            new PlayersWithParameterizedConstructor("Naman Dhir","India")
        ]

console.log(playerDetails);

//.forEach() function to print the values in a proper a format
//.forEach() will accept a callback function

playerDetails.forEach(s=> {
    
    s.displayPlayerDetails()
    console.log("******".repeat(10));
});

//.filter() function will help us filter out of the data based on the criteria passed
//.filter() will return an array based on the criteria applied.

let filteredData=playerDetails.filter(s=> s.countryOfThePlayer == "South Africa")
console.log(filteredData);

//.map() function is used to transform the data from one form to another form
//.map() will return the array of the same size 

let sampleData=[50,100,200,500];

//Cubing each and every number
let transformedData=sampleData.map(s=> Math.pow(s,3));
console.log(transformedData);

//Converting the PlayerObject Array to a string array
let completeDetailsOfObject = playerDetails.filter(s=> s.positionOfThePlayer == '')
                    .map(s=> s.positionOfThePlayer="Batsman")

console.log(completeDetailsOfObject);

//.find() is used to check whether as per the given criteria we have the player details or not
let playerFound=playerDetails.find(s=> s.nameOfThePlayer == 'AB De Villers')
console.log(playerFound);

//.every() will check whether the country of each and every player is India or not
//Returns false if the condition is not satisfied else true
console.log(playerDetails.every(s=> s.countryOfThePlayer == 'India'));

//.some() will check whether the country of atleast one player is India
//Returns false if the above condition is not satisfied else true 
console.log(playerDetails.some(s=> s.countryOfThePlayer == 'India'));

