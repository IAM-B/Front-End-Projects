/* 
    1. Array Methods.

    Methods associated with all arrays via their prototype are part of the reason for their existence.
    
    They are very practical, and it is crucial to know them.
    You can see them in the array's prototype by displaying an array in the console.

    Let's discover the main array methods together.
*/

/* 
    1. Array.prototype.forEach(callback(element, index, array))

    Definition: Executes a callback function on each element of an array.
    
    The callback is ALWAYS called with ALL the parameters.
    It's up to the developer to choose which one(s) to use.

    Return Value: undefined

*/

    // const numbers = [1, 2, 3, 4, 5, 6];

    // numbers.forEach((number, index) => {
    //     console.log(`Number at index ${index}: ${number}`);
    // });

/* 
    2. Array.prototype.map(callback(element, index, array))
    
    Definition: Returns a new array containing the results of calling a callback function on each element of an array.

    Return Value: A new array containing the return value of each callback function call.

*/

    // const people = [
    //     {
    //         name: "Pedro",
    //         age: 25
    //     },
    //     {
    //         name: "Sara",
    //         age: 26
    //     },
    //     {
    //         name: "Maria",
    //         age: 27
    //     }
    // ];

    // const names = people.map(person => person.name);
    // console.log(names);

/* 
    3. Array.prototype.filter(callback(el, index, array))

    Return Value: An array containing the elements that passed the test from the callback function.
    If the function returns true, the element is kept in the returned array; otherwise, it is ignored.

    Used to filter elements from an array.
*/

    // const heights = [170, 185, 198, 162, 187, 155, 178, 207, 201, 189];

    // const tallHeights = heights.filter(height => height >= 180);
    // console.log(tallHeights);

/* 
    4. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

    Definition: Accumulates each value of an array to an initial value.
    If an initial value is not provided, the first element of the array is used.
    
    Examples: Used for calculating averages, accumulating values, and solving various problems.

    Return Value: The accumulator after all operations.

*/

    // const marks = [18, 5, 17, 12, 20, 16, 14];

    // const totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / marks.length
    // console.log(totalMarks.toFixed(2));

/* 
    5. Array.prototype.sort(callback(firstEl, secondEl))

    Definition: Sorts strings, numbers, objects, etc...

    Return Value: The same sorted array.

    It uses an insertion algorithm implemented differently in each browser.

    Example: 

    Initial
    [10, 4, 12]

    Step 1
    |Sorted Part|
    [|4, 10|, 12]

    Step 2
    If 12 is greater than 10, it's in the right place; sorting is done.
    [|4, 10, 12|]
*/

const letters = ["z", "b", "a", "d", "e"];
letters.sort();
console.log(letters);

const numbers2 = [10, 55, 2, 250, 500, 85];
numbers2.sort((a, b) => a - b);
console.log(numbers2);

// You can also sort arrays of objects
const store = [
    {
        item: "Notebook",
        price: 20
    },
    {
        item: "Bag",
        price: 60
    },
    {
        item: "Pen",
        price: 2
    }
];

store.sort((a, b) => a.price - b.price);
console.log(store);
