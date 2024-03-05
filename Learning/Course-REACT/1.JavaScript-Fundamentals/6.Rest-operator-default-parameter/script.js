/*
  1. Rest operator
  Rest parameters allow accepting an indefinite number of arguments made available as an array.
*/

function concatenation(...strings){
  console.log(strings);
  return strings.reduce((acc,cur) => acc + cur)
  }
  
  console.log(concatenation("I ", "am ", "happy."));
  
/*
  2. Default parameters.
  They allow defining a default value if an argument corresponding to the parameter in question is not provided.
*/

function welcoming(userName = "visitor"){
  return `Welcome, ${userName}.`
  }
  console.log(welcoming("Paul"));
  console.log(welcoming("Sara"));
  console.log(welcoming());