/* 
    1. Spread operator

    The spread operator syntax allows you to copy values from an iterable element like an array, string, or object.
    It's useful for performing a shallow copy or spreading out a list.
*/
    const array = [1,2,3,{a: 5}]
    // console.log(...array);

    const shallowArrayCopy = [...array, 4,5,6]
    // console.log(shallowArrayCopy);
    array[3].a = 555
    // console.log(shallowArrayCopy);

    const obj = {
        name: "Muhammad",
        age: 25
    }
    const shallowObjCopy = {...obj, name: "Abd Allah"}
    console.log(shallowObjCopy);

// If a property is added to the copied object, it will replace the existing one.
    const shallowObjCopy2 = {...obj, name: "Abd elRahman"}
    console.log(shallowObjCopy2);

// It also works with strings
const str = "The cat jumps, the dog runs."
const strCopyArray = [...str]
console.log(strCopyArray);

