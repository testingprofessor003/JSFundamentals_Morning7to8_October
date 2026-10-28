//math.pow is used to calculate the power of a given number
const mathematicalFunction=function (a:number, b:number):number
                            {
                                return (a+b)-(a-b)+Math.pow(a,2)+Math.pow(b,2);
                            }

//console.log(mathematicalFunction(50,100));

//Arrow Function: Short hand form of Function Expression
let arrowBasedMathematicalFunction=(a:number,b:number) => (a+b)-(a-b) + Math.pow(a,2)+Math.pow(b,2);

//console.log(arrowBasedMathematicalFunction(40,50));

//Even when we are reassigning the function in .ts we shall ensure that the return type is same as the previous function
arrowBasedMathematicalFunction = () => 500;

let anotherArrowFunction=() => console.log("No argument Arrow Functions");
//console.log(anotherArrowFunction); //Prints the name of the function

const PI=3.14

//Default parameters : If we want to pass some default values for a particular argument, we can use this
//There is unstated rule in .ts is that all the default parameters shall be declared at the end 
function voterDetails(name:string,age=25)
{
    console.log("Name of the voter is: ",name);
    console.log("Age of the voter is: ",age);
}

//voterDetails("Sushmita",35);

//No Concept of Function Overloading in .ts, as it treats every function as a unique function
//even if there is a function with same name and different set of arguments, still it will be considered as a duplicate function
function invertVoterDetails(age:number,name="Hari")
{
    console.log("Name of inverted voter is: ",name);
    console.log("Age of the inverted voter is: ",age);
}

//invertVoterDetails(40);

function invertVoterDetails_Moredetails(age:number,name="Hari",constituency="HSR Layout")
{
    console.log("Name of inverted voter is: ",name);
    console.log("Age of the inverted voter is: ",age);
    console.log("Your Vote Right is in ",constituency);
}

//We use the keyword export to expose these functions so that other files can start using this
export {anotherArrowFunction,arrowBasedMathematicalFunction,PI,invertVoterDetails,voterDetails};
