console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( Clay ) {
  return 'Hello Clay';
}
// Remember to call the function to test
helloName();
console.log(helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  console.log( 'In addNumbers:', firstNumber, secondNumber );
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log( 'Running addNumbers with 2 & 3:', addNumbers( 2, 3 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  console.log( 'In multiplyThree' );
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
console.log( 'Running multiplyThree with 2, 2, & 2', multiplyThree( 2, 2, 2 ) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('In isPositive');
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let names = [ 'Clay', 'Joe', 'Mike', 'Bruce' ];

function getLast( array ) {
  console.log( 'In getLast' );
  array = [names.pop()];
  return array;
}
console.log('The last item is', getLast());


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find


function find( value, array ){
  console.log('In find');
  for ( let i=0; i<array.length; i++) {
    if ( array[i] === value ){
      console.log( 'Here he is!!' );  // Added this log as an extra emphasis when the code finds the value, please let me know if this should not be here.
      return true;
    }
  }
  return false;
}
console.log( 'Is the first name Jim?', find('Jim', names));
console.log( 'Is the first name Clay?', find('Clay', names));
console.log( 'Is the first name Billy?', find('Billy', names));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

let fruits = [ 'apple', 'pear', 'kiwi' ];
let fruitsString = '';

function isFirstLetter(letter, string) {
  for (let fruit of fruits ) {
    if (letter === fruit[0]) {
      return true;
    }
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

// function sumAll( ) {
//   let sum = 0;
//   // TODO: loop to add items
//   return sum;
// }  // WHACKED THESE OUT TO EDIT THE ORDER

const numArray = [ 1, 2, 3, 4 ];
let sum = 0;

function sumAll() {
  for (let i in numArray) {
    sum += numArray[i];
  }
  return sum;
}

console.log('The sum of the array should be 10:', sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
