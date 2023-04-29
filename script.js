// difference
// this function takes in two parameters and returns the difference of the two;
function difference(num1, num2) {
  return num1 - num2;
}

difference(2, 2); // 0
difference(0, 2); // -2

// product
// this function takes in two parameters and returns the product of the two;

function product(num1, num2) {
  return num1 * num2;
}

product(2, 2); // 4
product(0, 2); // 0

// printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

function printDay(day) {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (day === 0 || day > 7) return undefined;
  else return week[day - 1];
}

printDay(4); // "Wednesday"
printDay(41); // undefined

// lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
function lastElement(arr) {
  return arr[arr.length - 1];
}

lastElement([1, 2, 3, 4]); // 4
lastElement([]); // undefined

// numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

function numberCompare(num1, num2) {
  if (num1 > num2) return "First is greater";
  else if (num2 > num1) return "Second is greater";
  else return "Numbers are equal";
}

numberCompare(1, 1); // "Numbers are equal"

numberCompare(2, 1); // "First is greater"

numberCompare(1, 2); // "Second is greater"

// singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(word, letter) {
  let total = 0;
  const letterTolower = letter.toLowerCase();
  const wordToLower = word.toLowerCase();
  console.log(letterTolower, wordToLower);
  for (let i of wordToLower) if (i === letterTolower) total++;
  return total;
}

singleLetterCount("amazing", "A"); // 2
singleLetterCount("Rithm School", "o"); // 2

// multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(string) {
  let stringObject = {};
  for (let letter of string) {
    stringObject[letter] = stringObject[letter] + 1 || 1;
  }
  return stringObject;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
