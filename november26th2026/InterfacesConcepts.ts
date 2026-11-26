//Interface:
//It is an extension of abstraction that we have discussed 
//Here Every method inside the interface is abstract in nature
//It also supports multiple inheritance

//We can also define the template for the object that we want to work on

//Static keyword --> It ensures that the methods or variables can be accesseed at the class level
interface Hospitals
{
    hospitalGuideLines():Hospitals;
    safetyMeasures():Hospitals;
    bestPractices():Hospitals;

    //Ideally the static methods are not allowed inside an interface
    //static pharmacySetup():Hospitals;
}

class ApolloHospitals implements Hospitals
{
    //In TS we need not use the keyword override when we are implementing the logic for the method present inside the interface
    hospitalGuideLines(): ApolloHospitals {
        
        console.log("We need to provide better health care facilities and treat every patient equally");
        return this;
    }   

    safetyMeasures(): ApolloHospitals {
        console.log(" In Case of any natural disaster or any fire attack or something, we need to maintain a proper contingency plan for safe exit");
        return this;
    }

    bestPractices(): ApolloHospitals {
        console.log("All the best practices shall be provided to the patient and latest medical services/enhancements shall be provided to all the people");
        return this;
    }

    static pharmacySetup():void
    {
        console.log("Setup of a world class pharmacy working round the clock is super essential for any kind of medications");
    }
}

let hospital:Hospitals=new ApolloHospitals();
console.log(hospital); //Prints empty object as there are no data members

hospital.bestPractices().hospitalGuideLines().safetyMeasures();
ApolloHospitals.pharmacySetup(); //Calling the static method based on the class name

//This is something which is widely used at the time of development for modelling the API Responses
interface UserDetails
{
    id:number;
    name:string;
    profession:string;
    age?:number; //Not Mandating whether to pass the value for this particular attribute
    salary?:number; 
    experience:number;
    readonly offerLetter: string;
}

let userOne:UserDetails= {
    id:1,
    name:'Anureet',
    profession:"QA Lead",
    experience:15,
    offerLetter: "We are happy to have you onboarded to the organization, expecting you to do wonders"
};

console.log(userOne);

console.log(userOne.id);
console.log(userOne.name.toUpperCase());
console.log(userOne.experience);

userOne.experience=18;

//Cannot modify readonly values
//userOne.offerLetter='';

interface BankAccount
{
    accountHolderName:string;
    balance:number;
    deposit(amount:number):void;
    withdraw(amount:number):boolean;
}

//Object Literal way of implementing the interface
let bankUserOne:BankAccount= {

    accountHolderName:"Vamsi",
    balance:50000,
    deposit(amount:number):void {
        this.balance+=amount;
    },

    withdraw(amount:number):boolean
    {
        if(amount>this.balance)
            return false;

        this.balance-=amount;
        return true;
    }
};

console.log(bankUserOne);

bankUserOne.deposit(5000);
console.log(bankUserOne.balance," After Depositing the amount");
console.log(bankUserOne.withdraw(3000));
console.log(bankUserOne.balance, " After withdrawing the amount");


//Using the class Way:

class CheckAccounts implements BankAccount
{
    constructor(public accountHolderName:string,public balance:number)
    {

    }

    deposit(amount: number): void {
        this.balance+=amount;
    }

    withdraw(amount: number): boolean {
        if(amount>this.balance)
            return false;

        this.balance-=amount;
        return true;
    }
}

let checkAccounts=new CheckAccounts("Nirush",40000);

checkAccounts.deposit(50000);

console.log(checkAccounts.balance);