/*
  Template literals, or template strings, are strings that use an extremely convenient syntax.

  They can be used for:
  - Embedding JS expressions in a string
  - Inserting line breaks
  - Concatenating strings
  - Creating templates (code snippets).

  We create a template using backticks ``.
  To embed an expression, we use the ${expression} syntax between the backticks.
*/

/* Adding an expression */
  const a = 5
  const b = 10

  console.log("The calculation of a plus b is equal to:", a + b);
  console.log(`The calculation of a plus b is equal to: ${a + b}`);

/* Line break */
  console.log("Here is some text \n that wraps to the next line.");
  console.log(`Here is some text 
  that wraps to the next line.`);

/* Using the expression returned by a function. */
  function foo() {
    return "abc"
  }
  console.log(``);