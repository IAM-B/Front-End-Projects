/* 
1. Higher-Order Function.

Higher-order functions are functions that either receive a callback function as an argument, return a function, 
or do both at the same time! This opens the door to many solutions and greater flexibility.
*/


const salaries = [1200,5000,4000,2500,3450,1800]

function customFilter(arr, callback) {

    const filteredArray = []

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
}

console.log(customFilter(salaries, salary => salary > 3000));
console.log(customFilter(salaries, salary => salary >= 5000));
console.log(customFilter(salaries, salary => salary < 1000));
console.log(customFilter(salaries, salary => salary > 2000));


const countries = [
  {
      name: "Japan",
      gdp: 4941
  },
  {
      name: "Germany",
      gdp: 4260
  },
  {
      name: "South Korea",
      gdp: 1811
  },
  {
      name: "India",
      gdp: 3176
  },
  {
      name: "Canada",
      gdp: 1988
  },
]

console.log(customFilter(countries, country => country.gdp > 3000));
