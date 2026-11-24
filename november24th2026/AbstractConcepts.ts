//Abstract Classes:
//Serves the blueprint for other classes which allows you to define a common interface 
//and a shared code for the group of sub classes

//Abstract method: Method without a body 
//Key Notes:
//1. Cannot create an object of the class
//2. May or (may not) contain abstract methods
//3. Can have constructors inside the class
//4. Inside an abstract class only we can have abstract methods 
//5. Whenever any class is extending an abstract class, we need to write the logic for those methods in the child class
//6. Constructor and variables cannot be abstract in nature

abstract class TrafficSignals
{
    private country:String;

    constructor(country:string)
    {
        this.country=country;
        console.log("Managing the traffic signals for the country: ",country);
    }

    abstract redSignal():TrafficSignals
    // {
    //     console.log("Waiting for 70 seconds for the red signal to be gone");
    //     return this;
    // }

    abstract yellowSignal():TrafficSignals
    // {
    //     console.log("Keep the engines ready and on for to start moving");
    //     return this;
    // }

    abstract greenSignal():TrafficSignals
    // {
    //     console.log("It will be open for 20 seconds, please move faster");
    //     return this;
    // }
}

//The Below Concept is known as Multi Level Inheritance as one parent class is used by multiple child classes

class AustralianTrafficSignals extends TrafficSignals
{
    constructor()
    {
        super("Australia");
    }

    override redSignal(): AustralianTrafficSignals {
        
        console.log("Wait for 20 seconds for the red signal to be gone");
        return this;
    }

    override yellowSignal(): AustralianTrafficSignals {
        
        console.log("Wait for 10 seconds to start the engines");
        return this;
    }

    override greenSignal(): AustralianTrafficSignals {
        
        console.log("Waiting for 50 seconds to clear the roads");
        return this;
    }
}

class IndianTrafficSignals extends TrafficSignals
{
    //No need to pass the argument at the constructor level
    constructor()
    {
        //We are referring to the parameterized constructor present in the parent class
        super("India");
    }

    override redSignal(): IndianTrafficSignals {
        
        console.log("Wait for 120 seconds for the red signal to be gone");
        return this;
    }

    override yellowSignal(): IndianTrafficSignals {
        
        console.log("Wait for 10 seconds to start the engines");
        return this;
    }

    override greenSignal(): IndianTrafficSignals {
        
        console.log("Waiting for 300 seconds to clear the roads");
        return this;
    }
}

//Ideally at the time of class creation, the missing constructor error will be thrown
//But in TS we are encountering this error at the time of object creation

let traffic:TrafficSignals=new IndianTrafficSignals();

traffic.redSignal()
        .yellowSignal()
        .greenSignal();

traffic=new AustralianTrafficSignals();

traffic.redSignal().yellowSignal().greenSignal();