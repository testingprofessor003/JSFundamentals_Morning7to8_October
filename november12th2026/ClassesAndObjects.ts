// let firstName="Sameer";
// let lastName="Sharma";

//Class:
//It is a blueprint or a template that is used to create objects. 
//It helps us package the related data and functionality together
//It is also an entity that consists of attributes(data members) and behaviours
//It also checks the type definition at the run time.

/*class <className> 
  {
    //Attributes are nothing but varaibles in the class

    //Behaviour is nothing but the methods present in the class
  }
*/

//In JAVA, when we create a class, JVM creates a default constructor
//which in turn initializes to default values for each and every variable
//Initial values : Number =0, string = null, char='', boolean=false

//IN TS, when we create a class, there is no such concept of creating a default constructor by itself
//as it is built of top of JS Classes
class Person
{
    //For sure we want to initialize the variables inside a class in TS/JS
    firstName:string = "Ravinder";
    lastName:string = "Y";

    //this keyword represents that we are accessing the variable that is present in this class
    //If we declare a function inside a class that is called as a method
    displayNameDetails():void
    {
        //if we call the variables directly, it will look out for the variables present outside the class
        //If it is not present then it will throw a compilation error
        console.log("Name of the person is: ",this.firstName," ",this.lastName);
    }
}

//Here "new" keyword is responsible for creating the object of the person class
//Here the keyword "new" will be responsible for creating a photocopy of the class that has been created
//and stores it in the heap memory
let person1=new Person();

//Here person1 is the variable that is holding the object reference
//person1 holds the memory address of the object that has been created
//With the help of the object reference, we can access the data members and the methods present in the class
person1.firstName="Kanika";
person1.lastName="Sharma";

person1.displayNameDetails();


export {person1};