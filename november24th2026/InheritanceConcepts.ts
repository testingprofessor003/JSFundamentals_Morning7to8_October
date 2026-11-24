//Inheritance:
//We will be inheriting the properties from the parent to child
//Inheriting the properties here means --> Data members, methods

//Every method inside a class is public in nature

//In TS a Class can extend only one class at a time, cannot inherit multiple classes at a time

class Vehicles
{
    private dummyData:string="dummy";

    startEngine():Vehicles
    {
        console.log("Starting the engine");
        return this;
    }

    stopEngine():Vehicles
    {
        console.log("Stopping the engine");
        return this;
    }

    pressAccelerator():Vehicles
    {
        console.log("Pressing the accelerator");
        return this;
    }

    applyBrakes():Vehicles
    {
        console.log("Pressing the brakes to stop the vehicle");
        return this;
    }
}

//extends is the keyword used to perform the inheritance operations
class Cars extends Vehicles
{
    private noOfWheels:number=4;
    private carEngine:string="Car Engine";

    infotainmentSystem():Cars
    {
        console.log("Building an infotainment system for the car");
        return this;
    }

    doorPanels():Cars
    {
        console.log("Applying a better color to get a better feel of the car");
        return this;
    }

    //Method Overriding: When the method is same name and same set of arguments in both parent and child class
    //Then the method present in the child class will override the method present in the parent class

    //override keyword will helps us know whether we are actually overriding the method or not
    //A covariant return type can be more specific. Cars is assignable to Vehicles.
    override startEngine(): Cars {
        console.log("Starting the Car Engine");
        return this;
    }

    override pressAccelerator(): Cars {

        //super keyword is used to access the parent class methods,variables,constructor
        super.pressAccelerator();
        console.log("Pressing the accelerator of the Car after starting the engine");
        return this;
    }
}

//Multi Level Inheritance (Vehicles -> Cars --> Sports Cars)
//This class can refer to all the methods present in the parent and grand parent class
class SportsCar extends Cars
{
    nitroBooster():SportsCar
    {
        super.startEngine(); //Referring to the method present in the grandparent class
        console.log("Building a Nitro Booster Car to speed up the engines");
        return this;
    }

    override pressAccelerator(): SportsCar {
     
        console.log("Pressing the accelerator will race the car to high speeds");
        return this;
    }

}

let cars:Cars=new Cars();

console.log(cars); //Prints an empty object as there are no data memebers present in the parent class as well as in the child class

//If there are data members preesent in the parent and the child class then it will print those members, but if the variable is private it cannot be accessed

//Inherited Method (Method Coming from Parent Class)
cars.applyBrakes();  //Calls the Inherited method
cars.startEngine(); //Calls the overriden Method

cars.infotainmentSystem(); //Specialized method (Method that is present in the child class only)


//Top Down Approach --> As a parent class we can store the references of the child class
//But the parent class object reference can access the methods present in it's own class as well as the overriden methods present in the child class
let sportsCar:Cars=new SportsCar();

sportsCar.pressAccelerator(); //Overriden Method
sportsCar.applyBrakes();
//sportsCar.nitroBooster(); //Specialized method present in the Sports Car Class only


