/* 
    Let's discover and recap the main features of 'let' and 'const' declarations and their differences
    compared to the 'var' keyword.
*/
    if(true) {
        var test = "Hello word"
        let test2 = "Test2"
        const test3 = "Test3"
    }
    // console.log(test, test2, test3);

/* 
    1. 'let' & 'const' are block-scoped, while 'var' is function-scoped.
*/
    function foo() {
        var number = 10 
        let number3 = 99
    }
    // console.log(number);

/* 
    2. You cannot declare an empty 'const', unlike 'let' or 'var'.
*/
    var animal 
    let lion 
    const cat = "Feline"
    // console.log(lion);

/*
   3. You can redeclare 'var' variables without causing errors.
*/
    var dog = "Coco"
    var dog = "Tobi"
    // console.log(dog);

    // let cat = "Feline"
    // let cat = "Lorem"

/* 
    4. A 'var' variable gets hoisted and can be used before its declaration because it's initialized to
    'undefined'.
    'let' & 'const' are hoisted but not initialized.
    
    JavaScript Hoisting
    Function and variable declarations are hoisted in JavaScript. This means they are stored 
    in the memory of the Variable Object (VO) 
    of the current execution context and made available within the execution context even before the code execution starts.
*/
    console.log(hoisting);
    var hoisting = "Test"
    let hoisting2 = "Test2"

/* 
    5. A globally declared 'var' variable gets registered in the global object, which can lead to conflicts 
    between global variables.
    'let' and 'const' can be registered globally, but they are not accessible as direct properties of 
    'window'; they are recorded in the lexical environment 
    of the global object (the set of declarations accessible by it).
*/
    var userName = "Abd Allah"
    let userName2 = "Abd elRahman"
    console.log(window);