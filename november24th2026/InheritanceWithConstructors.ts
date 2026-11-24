
class TrafficSignals
{
    private country:String;

    constructor(country:string)
    {
        this.country=country;
        console.log("Managing the traffic signals for the country: ",country);
    }

    redSignal():TrafficSignals
    {
        console.log("Waiting for 70 seconds for the red signal to be gone");
        return this;
    }

    yellowSignal():TrafficSignals
    {
        console.log("Keep the engines ready and on for to start moving");
        return this;
    }

    greenSignal():TrafficSignals
    {
        console.log("It will be open for 20 seconds, please move faster");
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