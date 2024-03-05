/*
1. Destructuring.
Destructuring assignment involves breaking down the properties of an object or the elements of an array into separate variables.
*/

/* A. Assigning Object Properties. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
  }

  // const {country, age, userName} = userObj
  // console.log(age, country, userName);

  // Renaming the constants
  // const {userName: mainName, age: exactAge, country: origin} = userObj
  // console.log(exactAge);

  // Creating constants with default values, in case props do not exist.
  // const {country, sport = "Football", beverage = "Whater"} = userObj
  // console.log(country, sport, beverage);

  // Combining different names and default values.
  // const {userName: mainName = "Hanz"} = userObj
  // console.log(mainName);

  // Assigning the properties of an expected object as parameters.
  const numbers = {
    num1: 50,
    num2: 100
  }
  function foo({num1, num2}) {
    return num1 + num2
  }
  // console.log(foo(numbers));

/* B. Assigning Array Values. */

  const animals = ["cat","dog","mouse","lion"];

  const [cat, dog] = animals
  console.log(cat, dog);

  let animal1, animal2
  [animal1, animal2] = animals
  console.log(animal1, animal2);

  // Default value and ignoring values
  const fruits = ["strawberry", "grapes", "banana", "apple"]

  // const [strawberry, grapes, ,apple] = fruits
  // console.log(strawberry,grapes,apple);

  // const [strawberry="red fruit"] = fruits
  // console.log(strawberry);

  // Assigning the rest of an array
  const [student, ...marks] = ["Ahmad", 10,10,12,17,15,9]
  console.log(student, marks);

  // Also works with strings
  const str = "ABC"
  const [a,b,c] = str
  console.log(a,b,c);