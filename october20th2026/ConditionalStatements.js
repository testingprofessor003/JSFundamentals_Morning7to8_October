//In General, if we want to validate with more than one condition,
//else if is used to check with multiple conditions of data

var a="Sample Data";
var b=100;
var c=299;

if(b%2==0)
    console.log(b," is divisible by 2");

else if(a.length>0 && a.at(-11)!='')
    console.log(a," is a genuine strnig");

else if(c%3==0 || c%7==0)
    console.log(c," is not satisfying the above conditions");
else 
    console.log("Conditions not satisfied");