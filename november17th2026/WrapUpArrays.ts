//type : It helps us in creating a type aliasing

type MyDataType=string | number;

//Since the type aliasing supports strings and numbers,
//so we need to string and nu"mber data only
let firstData:MyDataType = 500;
let secondData:MyDataType = "false";

//Union of literal Valyes
type Status = "active" | "inactive" | "pending";

let firstStatus:Status="active";

//Since it accepts only active,pending,inactive and if you pass any other sort it will throw a compilation error
//let secondStatus:Status="Samples";

// let secondStatus:Status="ac".concat("tive");
//console.log(secondStatus);

//Type aliasing is something only for the compilation. At the run time, the type declarations are erased

let anotherArray:number[]=[20,240,100,4299];

//Returns true if it is an array else false
console.log(Array.isArray(anotherArray));

//Reads the value from the right to the left
console.log(anotherArray.at(-3));

let anotherStringArray:string[]=["Ramesh","Suresh","Mahesh","Mohan","Ramesh","Suresh"];

//Want to remove the duplicate values present in the array:
console.log([...new Set(anotherStringArray)]);

let nestedArray:any=[1,[2,3],[4,5],[7,8,9,10],[11,12,14,15]];

//Flattens all the nested arrays into a single array
console.log(nestedArray.flat());

nestedArray=[4,[40,[400,200],[300,200]],[50,[200,[400,900,2000,[-2994,289,2491,[292,299,24891]]],8200,-400]],200];
console.log(nestedArray.flat());

//Flatten the array,upto the depth of level 2
console.log(nestedArray.flat(2));

//Flatten the array upto the infinite depth
console.log(nestedArray.flat(Infinity));

//Readonly means we cannot modify the data
let stringData: readonly string[]=["Madan","Kumar","Sharma"];

//Since the array is read only, it does not allow modification of data
//stringData[2]="Sandeep";

//.Push(), .shift(), .unshift(), .pop() will not work on read only arrays
//stringData.push(300);

//.reverse() will mutate the data (Change the data)
//.reverse() will perform inplace reversal of data
//console.log(stringData.reverse());

//This is one of the latest functions introduced in ES2023 onwards to support reversal of data for read only arrays
//.toReversed() will returns a new array altogether and store it in a seperate variable
console.log(stringData.toReversed());

//.sort() method will perform in place sorting of data 
//When we work with readonly data it will throw a compilation error
console.log(anotherStringArray.sort());

//.toSorted() function is to be used to sort the data
//Returns a new array of data
console.log(stringData.toSorted());

console.log(stringData);

//Array of Objects : RCB (Royal Challengers Bengaluru) current squad - IPL 2026 season
type RCBPlayer = {
	playerName: string;
	country: string;
	role: string;
	age: number;
};

let rcbSquad: RCBPlayer[] = [
	{ playerName: "Virat Kohli", country: "India", role: "Batter", age: 38 },
	{ playerName: "Rajat Patidar", country: "India", role: "Batter (Captain)", age: 33 },
	{ playerName: "Devdutt Padikkal", country: "India", role: "Batter", age: 27 },
	{ playerName: "Bhuvneshwar Kumar", country: "India", role: "Bowler", age: 36 },
	{ playerName: "Krunal Pandya", country: "India", role: "All-Rounder", age: 35 },
	{ playerName: "Jitesh Sharma", country: "India", role: "Wicket-Keeper Batter", age: 33 },
	{ playerName: "Yash Dayal", country: "India", role: "Bowler", age: 28 },
	{ playerName: "Suyash Sharma", country: "India", role: "Bowler", age: 23 },
	{ playerName: "Rasikh Salam", country: "India", role: "Bowler", age: 26 },
	{ playerName: "Venkatesh Iyer", country: "India", role: "All-Rounder", age: 29 },
	{ playerName: "Josh Hazlewood", country: "Australia", role: "Bowler", age: 35 },
	{ playerName: "Phil Salt", country: "England", role: "Wicket-Keeper Batter", age: 30 },
	{ playerName: "Romario Shepherd", country: "West Indies", role: "All-Rounder", age: 35 },
	{ playerName: "Jacob Bethell", country: "England", role: "All-Rounder", age: 22 },
	{ playerName: "Nuwan Thushara", country: "Sri Lanka", role: "Bowler", age: 32 },
	{ playerName: "Jacob Duffy", country: "New Zealand", role: "Bowler", age: 34 },
];

//console.log(rcbSquad);

//Sort the players on the basis of their name
//.localCompare() will compare the string based on the ascii value of each and every character
rcbSquad.sort((a,b) => a.playerName.localeCompare(b.playerName))

console.log(rcbSquad);

console.log(
    "**********".repeat(10)
);
//Sort the players based on the age in descending order:

rcbSquad.sort((a,b) => b.age - a.age);

console.log(rcbSquad);

//Destructing of an array:
let num:number[]=[4,5,10,20];

//Instead of storing it a seperate variables in a seperate lines, we are acheiving it in a single line
// let OneOne=num[0];
// let TwoTwo=num[1];

let[one,two,three,four]=num;

console.log(one," ",two, " ",three," ",four);

//Array of Objects (Readonly) : Los Angeles Lakers current squad - NBA 2026-27 season
type LakersPlayer = {
	playerName: string;
	position: string;
	country: string;
	age: number;
	contractValue: number; //2026-27 season salary/cap hit, in USD
};

const lakersSquad: readonly LakersPlayer[] = [
	{ playerName: "Luka Doncic", position: "PG", country: "Slovenia", age: 27, contractValue: 49500000 },
	{ playerName: "Austin Reaves", position: "SG", country: "USA", age: 28, contractValue: 41300000 },
	{ playerName: "Walker Kessler", position: "C", country: "USA", age: 25, contractValue: 30108821 },
	{ playerName: "Quentin Grimes", position: "SG", country: "USA", age: 26, contractValue: 13953489 },
	{ playerName: "Sandro Mamukelashvili", position: "C", country: "Georgia", age: 27, contractValue: 13000000 },
	{ playerName: "Jarred Vanderbilt", position: "PF", country: "USA", age: 27, contractValue: 12428571 },
	{ playerName: "Collin Sexton", position: "PG", country: "USA", age: 27, contractValue: 9366000 },
	{ playerName: "Jake LaRavia", position: "PF", country: "USA", age: 24, contractValue: 6000000 },
	{ playerName: "Jaden Hardy", position: "SG", country: "USA", age: 23, contractValue: 6000000 },
	{ playerName: "Matisse Thybulle", position: "SF", country: "USA", age: 29, contractValue: 3300000 },
	{ playerName: "Kevon Looney", position: "C", country: "USA", age: 30, contractValue: 2449421 },
	{ playerName: "Ziaire Williams", position: "SF", country: "USA", age: 24, contractValue: 2449421 },
	{ playerName: "Bronny James", position: "PG", country: "USA", age: 22, contractValue: 2486995 },
];

//Since lakersSquad is readonly, push/pop/sort/splice etc. will throw a compilation error
//lakersSquad.push({ playerName: "New Player", position: "SF", country: "USA", age: 20, contractValue: 2000000 });

//console.log(lakersSquad);

let sortedPositionArray:LakersPlayer[]=lakersSquad.toSorted((c,d)=> c.position.localeCompare(d.position));

console.log(sortedPositionArray);

//Grouping the data based on the criteria provided
const groupedByData=Object.groupBy(lakersSquad, s=> s.position);

console.log(groupedByData);

let filterdCountryData=lakersSquad.filter(s=> s.country == 'USA');

console.log(filterdCountryData);