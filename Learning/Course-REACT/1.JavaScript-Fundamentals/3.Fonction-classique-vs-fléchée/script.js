/* 
    Let's rediscover arrow functions together and their differences compared to regular functions.
*/


/* 
    1. Syntax.
    The syntax is less cluttered, making it easier to use as an argument, especially as a callback function.
*/
    function add(a,b) {
        return a + b
    }

    const add2 = (a,b) => a +b
    // console.log(add2(5,10));

    const numbers = [1,2,3]

    numbers.forEach(el => console.log(el))
    numbers.forEach(function(el){return console.log(el)})

/* 
    2. The 'this' keyword.

    Regular functions create a 'this' keyword when executed, depending on the object that calls them.
    If they are not called by an object, 'this' is automatically equal to 'window' (the global object).

    Arrow functions do not create a 'this' of their own, but they can access the 'this' of a regular function if they are located inside one.
    If they are not within a regular function's environment (context), they read the 'this' of the global object because they are in the global execution context.
*/
    const person = {
        age: 45,
        getAge: function(){
            const arrowInsideClassic = () => {
                console.log("From Arrow", this);
            }
            arrowInsideClassic()

            return this
        }
    }
    console.log(person.getAge());

    // function foo(){
    //     console.log(this);
    // }
    // window.foo()

/* 
    3. arguments
    The same applies to the 'arguments' object, which is created in regular functions but not in arrow functions.
*/
function faz(){
    console.log(arguments); // arguments list
}
const foz = () => {
    console.log(arguments);
}
faz(1,2,3,4,5)
foz(1,2,3,4,5)



/*
    A quick recap to help you with the value of 'this' in regular functions vs. arrow functions (outside of constructor functions/use strict mode):

    Regular Function: 
    1. Is the function called from an object? 'this' is that object.
    2. Is the function not called from an object? 'this' is the global object 'window.'

    Arrow Function: 
    1. Is the arrow function located within a regular function? 'this' is the 'this' of the regular function.
    2. Is the arrow function not located within a regular function? 'this' is the global object 'window.'
*/
