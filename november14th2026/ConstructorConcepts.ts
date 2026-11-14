//What is a constructor ?
//It is a specialized form of a setter
//It is widely used at the time of Object Initialization
//What do we mean at the time of Object Initialization --> What are the activities that needs to be done at the time of object creation
//Constructor need not be called explicitly (as soon as the object is created, constructor will be called)
//Constructor is a special type of a method

//Like JAVA, in TS we do have the concept of default and parameterized constructors
//Since TS does not create it's own default constructor at the runtime, we have to create one if required

class Players
{
    private playerName:string;
    private playerCountry:string;

    //IN TS there is no concept of method overloading or constructor overloading directly

    //Constructor method without any arguments is known as default constructor
    //constructor keyword is used to represent the constructor of that class
    constructor()
    {
        this.playerName="Lebron James";
        this.playerCountry="USA";
    }

    displayPlayerData():void
    {
        console.log("Player Name is: ",this.playerName);
    }
}

let p1=new Players();
p1.displayPlayerData();

class PlayersWithParameterizedConstructor
{
    //readonly means we can assign the values to those variables only once per object creation
    private readonly playerName:string;
    private readonly playerCountry:string;
    private playerPosition:string;

    constructor(playerName:string, playerCountry:string, playerPosition?:string)
    {
        //this keyword is used to distingush between instance variables and local variables
        this.playerName=playerName;
        this.playerCountry=playerCountry;
        this.playerPosition=playerPosition?playerPosition:"";
    }

    //Since the variable is readonly that means we cannot reassign the data to the variable in any form
    /*
    set changePlayerName(playerName:string)
    {
        this.playerName=playerName;
    }
        */

    get nameOfThePlayer():string
    {
        return this.playerName;
    }

    get countryOfThePlayer():string
    {
        return this.playerCountry;
    }

    set positionOfThePlayer(playerPosition:string)
    {
        this.playerPosition=playerPosition;
    }

    get positionOfThePlayer():string
    {
        return this.playerPosition;
    }

    displayPlayerDetails():void
    {
        console.log("Player Name is: ",this.playerName);
        console.log("Player Country is: ",this.playerCountry);
    }
}

let p2=new PlayersWithParameterizedConstructor("MS Dhoni","India");
p2.displayPlayerDetails();

let p3=new PlayersWithParameterizedConstructor("Chris Gayle","West Indies");
p3.displayPlayerDetails();

//Both of the objects are pointing to different memory address
console.log(p2 == p3); //false

//Object reassignment 
p2=p3;

//As both the objects are pointing to the same memory location
console.log(p2 == p3); //true

export {PlayersWithParameterizedConstructor};