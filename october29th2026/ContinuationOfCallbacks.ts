//Ensuring type safety at the parameter level for the callback function

function mathmeticalOperation(a: number, b: number, callback: (a: number, b: number) => number): number {
    return callback(a, b);
}

console.log(mathmeticalOperation(40, 50, (a: number, b: number) => a + b));

//Optional callbacks/parameters:
//Those parameters or the parameters which is requesting for a callback function is completely optional
// ? at the function level represents optional arguments 
function greeting(name: string, msg?: string, greetingMsg?: (msg: string) => string): void {
    if (greetingMsg) //If the callback function greetingMsg is passed then only execute the callback function else not
    {
        // ? --> Represents a ternary operator which is a shorthand form of single if-else condition
        console.log("Hello ", name, "," + greetingMsg(msg ? msg : ""));
    }

    else {
        console.log("Hello ", name);
    }
}

// greeting("Ravinder");
// greeting("Ravinder","Good evening how are you doing");
// greeting("Ravinder","Good morning, how are you doing?",(msg) => msg);

//Nested If:
//Condition inside a condition

//Nested Loop:
//Loop inside a loop

//Nested Callback:
//Callback inside another callback

//Nested callback is also known as Pyramid Of Doom and also known as Callback Hell

//In the concept of Nested Callback it will be very difficult to maintain the code base properly
//And also if we want to modify the code, it is not readable at all for a new person who joins the organization

greeting("Ravinder", "Good morning, how are you doing?", (msg) => {

    greeting("Sushmita", "Good evening, how are you doing", (msg) => {

        greeting("Anureet", "Good afternoon, how is the work going on", (msg) => {

            greeting("Nirush", "Good night, sweet dreams, have a great sleep for a better morning", msg => msg);
            return "";
        });
        return msg.repeat(2);
    });

    return msg;
});

function ecommerceActivities(activityMsg:string,activity : (activityName:string) => void) : void
{
    activity(activityMsg)
}

ecommerceActivities("Logging into the application", (msg)=> {

    console.log(msg);
    ecommerceActivities("Applying the filters", (msg)=> {

        console.log(msg);
        ecommerceActivities("Searching for teh prodcuts and viewing the product details", (msg)=>{

            console.log(msg);
            ecommerceActivities("Adding the products to the wishlist", (msg)=>{

                console.log(msg);
                ecommerceActivities("Adding the products to the cart and making payment", (msg)=> {

                    console.log(msg);
                    ecommerceActivities("Order ID Generated",msg => console.log(msg));
                });
            });
        });
    });
});

//In order to tackle this callback hell, JS Developers from ES6 has introduced the concept of Promises and async/await.

