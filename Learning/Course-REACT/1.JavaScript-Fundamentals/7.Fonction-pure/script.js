/*
    1. Pure function.

    A pure function has two characteristics:
    1. It always returns the same result for the same provided arguments.
    2. It doesn't use any mutable values and has no side effects outside of its scope.
*/
function add(a,b) {
    return a + b
}
// console.log(add(10, 10))

let VAT= 20
function getFinalPrice(price, VAT){
    return price * (100 + VAT) / 100
}
console.log(getFinalPrice(100));