//Do-While Loop:

//Loop Runs atleast once irrespective of whether the condition is satisfied or not

//Syntax of do-while loop:

/*
    do
    {
        //Loop Of Code to be executed
    }
    while(condition);    
*/

var a;

do
{
    console.log(a);
}
while(a%2==0);

console.log("*******".repeat(10));

a=199;
var counter=0;
do
{
    console.log(a);

    if(counter<5)
        counter+=1;

    else 
        break;
}
while((a+1)%4 ==0 || (a+5)%5 ==0);

console.log("*******".repeat(10));

var k;

do
{
    k="Sample Information".slice(0,9).charCodeAt(8);
    
    //k=k.slice(0,k.length-1);
}
while(k.length>0);

