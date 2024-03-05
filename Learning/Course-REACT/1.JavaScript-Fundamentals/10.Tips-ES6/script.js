/* 
    Some syntactical features have been added to objects since 2015.
*/

// Adding a regular function

const obj = {
  sayHello: function() {
      console.log("Hello!");
  }
}

// Adding properties easily

const userName = "Lucie";
const age = 24;

// Property creation
const user = {
  userName,
  age
};
console.log(user);

// Using an expression to create a property

let category = "industry";
const plant = {
  id: 547,
  [category]: "Microship"
};
console.log(plant);
