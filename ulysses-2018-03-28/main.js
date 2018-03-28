// /**
//  * Structure of this entire file
//  * 1. Functions
//  * 2. Variables
//  * 3. "Procedural"
//  */


// // --- Functions ---

// function someFunction() {
//   // start by defining variables

// }

// function ...()


// function ...


// // --- Variables ---

// var a = 123;
// var b = 456;
// ....

// // -- Procedural -- (code that uses the variables and functions)

// someFunction(a, b)

// b += 1;



// Return vs console.log

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// 1 + 3 * 5 - 9
sum(1, subtract(multiply(3, 5), 9))

// How can turn the string "$123.45" into 123.45
// Takes a string that is formatted for humans and returns a computer friendly
// number from it
function convertFormattedCurrencyToNumber(formattedString) {
  // get rid of the "bad" parts of the string
  var numericString;
  // if the string starts with a "$", chop that off
  if (formattedString.indexOf('$') === 0) {
    numericString = formattedString.slice(1);
  } else {
    numericString = formattedString;
  }
  // take our "good", i.e. numeric, string and pareFloat it
  var parsedNumber = parseFloat(numericString);
  // return that value
  return parsedNumber;
}


// ------------------------------------------------------


var codeupClassrooms = [
  {
    name: 'Small Classroom',
    temp: {
      number: '84',
      description: 'too hot',
    }
  },
  {
    name: 'Big Classroom',
    temp: {
      number: '54',
      description: 'too cold',
    }
  }
];

// we want to get the big classroom's temperature as a number
var bigClassroom = codeupClassrooms[1];
var bigClassroomTemp = bigClassroom.temp;

var bigClassroomTempAsANumber = parseInt(bigClassroomTemp.number)
// same as
var bigClassroomTempAsANumber = parseInt(codeupClassrooms[1].temp.number)




// Sum all the values in an array

function sumValues(someArray) {
  var total = 0;
  // loop through the array
  someArray.forEach(function(number) {
    // (inside of the loop), add each value to a total
    total += number;
  });
  // return that total
  return total;
}

// alternate to join
function concatStrings(someArray) {
  var ultimateString = '';
  // loop through the array
  someArray.forEach(function(str) {
    // (inside of the loop), add each value to a total
    ultimateString += str
  });
  // return that total
  return ultimateString;
}


