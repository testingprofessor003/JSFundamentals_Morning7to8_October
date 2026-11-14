import { person1 } from "./ClassesAndObjects.ts";

//While we print the object of the class, it represents the data for all the
//variables that we have stored in the formed of key value pair
console.log(person1);

console.log("*****".repeat(10));

//Encapsulation:
//Till now we were exposing the variables to the outside world (outside the class)
//but in ideal scenario, no object reference shall not access the variables and modify the data
//We have to ensure that all the variables are private in nature (visible within the class)
//Since variables are private in nature and in order to access we use the concept of setter and getter methods to access them

//Preventing the data members to be accessed from the outside world and calling them using getter and setter methods

class Employee
{
    //When we use a private access modifier that means the variables declared will be accessible within this class
    //IN TS, never use a variable name as method name as it will throw "Duplicate identifier"

    private empId:number=0;
    private empSalary:number=0;
    private designation:string="";
    private yearsOfExperience:number=0;

    //setter method for employee id
    set EmployeeId(employeeId:number)
    {
        this.empId=employeeId;
    }

    //getter method for the employee id
    get employeeId():number
    {
        return this.empId;
    }

    set employeeSalary(employeeSalary:number)
    {
        this.empSalary=employeeSalary;
    }

    get employeeSalary():number
    {
        return this.empSalary;
    }

    get employeeDesignation():string
    {
        return this.designation;
    }

    set employeeDesignation(employeeDesignation:string)
    {
        this.designation=employeeDesignation;
    }


    get employeeExperience():number
    {
        return this.yearsOfExperience;
    }

    set employeeExperience(empExperience:number)
    {
        this.yearsOfExperience=empExperience;
    }
}

let emp1=new Employee();

//Calling the setter methods in TS
emp1.EmployeeId = 1500;
emp1.employeeSalary=50000;
emp1.employeeDesignation="QA Engineer";
emp1.employeeExperience=5;

console.log(emp1.employeeId," ",emp1.employeeSalary," ",emp1.employeeDesignation, " ",emp1.employeeExperience);
    
