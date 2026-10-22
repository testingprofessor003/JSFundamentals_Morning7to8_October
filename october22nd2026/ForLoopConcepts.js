//For Loop:

//1. It is also similar to while loop, but we can initialize the values, add conditions, increment or decreemtn at the runtime


/*
    for(initial value;condition;increment or decrement of value)
    {
        //Block of code to be executed    
    }
*/

for(let i=0;i<10;i=i+1)
{
    console.log(i);
}

console.log("******".repeat(10));

for(let i=40;i<400;i=i+80)
{
    console.log(i);
}

console.log("****".repeat(10));

for(let i="New Informations";i.length>0;)
{
    console.log(i);

    i=i.slice(0,i.length-1);
}

console.log("***********".repeat(10));

//a-z = 97 - 122
//A-Z = 65-90
// =32
//0-9 = 48-57

//Ascii value of 'o'--> 111
//111%3 =0
for(var j=400,i="ANother For Loop Set";j%5==0 && i.charCodeAt(2)%3==0; j+=10,i=i.slice(0,i.length-2))
{
    //400+111 = 511
    //410+111 = 521, String will be "ANother For Loop S"
    //420+111 = 531, String will be "ANother For Loop"
    //430+111 = 541, String will be "ANother For Lo"
    console.log(j+i.charCodeAt(2));
}

console.log("**********".repeat(10));

for(var k=30;k<100;k+=40)
{
    while(k%3==0)
    {
        console.log(k);
        k=k-5;
    }
}

console.log("***********".repeat(10));

for(var i=500;;)
{
    console.log("For Loop");
    break;
}

console.log("*************".repeat(10));

for(var j=30;j<100;j+=1)
{
    if(j==40 || j==50 || j%10==0)
        continue; //Skips that iteration

    console.log(j);
}