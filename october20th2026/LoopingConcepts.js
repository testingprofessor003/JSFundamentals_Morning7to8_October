//Loop:
//Repating the same set of code again and again till that condition is satisfied

//Different types of Loops:
//1. while loop
//2. do-while loop
//3. for loop
//4. foreach loop
//5. for of loop
//6. for in loop

//While Loop:
//Loop Runs until the condition is satisified

//Syntax of while loop:
/*
    while(condition)
    {
        //Block of code to be executed
    }
*/

let sampleData=200;

while(sampleData%4==0)
{
    sampleData=sampleData-4;
    console.log(sampleData);

    break; //Terminates the loop immediately
}

//If we do not put a break statement inside this loop, it will run into infinite loop which will eventually run out of heap memory and stops the execution
while(String(sampleData).charCodeAt(2)%3 ==0 && String(sampleData).length>0)
{
    sampleData=sampleData+" Another Data".substring(2,8);

    console.log(sampleData);

    if(sampleData.length%2!=0)
        break;
}

console.log("*******".repeat(5));

while(sampleData<600)
{
    //Short Hand Assignment Operation: Instead of writing a=a+5 ==> a+=5
    sampleData+=5;
    console.log(sampleData);
}

console.log("*******".repeat(10));

var newSet=400;

while(newSet>1000 && newSet<300)
{
    if(newSet%2==0)
        newSet+=100;
    else
        newSet+=200;

    console.log(newSet);
}

console.log("*******".repeat(10));

while(!(newSet>1000 && newSet<300))
{
    if(newSet%2==0)
        newSet+=100;
    else
        newSet+=200;

    console.log(newSet);

    if(newSet%4==0)
        break;
}



