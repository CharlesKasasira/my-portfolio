// Javascript String Methods continued
/**
 * string.length: Returns the number of characters in the
 * string. They include alphabets, spaces, punctuation, and
 * everything that is included in the string.
 */

console.clear();

let stringOne = "Tugezesa strings mu Javascript";
const lengthOfString = stringOne.length;

console.log(lengthOfString);

stringOne = "hello world";
const lengthOfString2 = stringOne.length;
console.log(lengthOfString2);

/**
 * string.replace()
 * string.replace(regexToFind, replacement/function, regexp)
 * string.replace(stringToFind, replacement/function, regexp)
 */

console.clear();
let stringTwo = "hey, you!";
let stringThree = " how are you?";

stringThree = stringTwo.replace("you", "everyone");
console.log(stringThree);

let exampleString = "Tugezesa string mu Javascript";
exampleString = exampleString.replace("Tugezesa", "Try out");
console.log(exampleString);
// logs Try out strings mu Javascript
/**
 * string.split(separator, limit): splits a string into
 * chunks based on the separator and returns an array of charactors
 * if the separator is not defined the given string will be return
 * as the only value of the new array.
 */

const SPLITTED_STRING = exampleString.split(" ");
console.log(SPLITTED_STRING);

const SPLITTED_STRING_INTO_LETTER = exampleString.split("");
console.log(SPLITTED_STRING_INTO_LETTER);

console.clear();
// challenge reverse the string
/**
 * Steps
 * ------
 * 1. Separate the string by letter to get an array
 * 2. loop the elements of the array while consatinting them 
 *    to the reverse string.
 * 3. Return the reversed string
 * 4. Display the string.
 */

 let reversedString = '' // o(1) => constant        

 for(let position = ( SPLITTED_STRING_INTO_LETTER.length - 1 ) ; position>=0; position--) { // o(n) => Linear
   reversedString = reversedString.concat(SPLITTED_STRING_INTO_LETTER[position]); //0(1)
 }

 console.log(reversedString);

 /**
  * Quiz: using comments describe what the function
  * below does. Describe each line in the function
  * Submit your answer before the end of the day
  * @param {*} string
  */

  console.clear();

  const REVERSE_STRING = (string) => {
    if (string === "" || string == null || string === 0) return string;

    const SPLITTED_INTO_LETTER = string.split("")
    let lastPosition = SPLITTED_INTO_LETTER.length - 1;
    let reversedString = "";

    while ( lastPosition >=0 ) {
      reversedString += SPLITTED_INTO_LETTER[lastPosition];
      lastPosition-- ;
    }

    return reversedString;
  }

  let name = "Wampamba";
  let nameReversed = REVERSE_STRING(name);
  console.log(nameReversed);
  console.log(REVERSE_STRING('DA'));


