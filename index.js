//! grouwup skill to backesnd developer

/*
//? task ReverseString Pseudocode
1. turn the string into array
2. use array method of reverse() to reverse contents of array
3. turn the reversed array back  into a string

example 

reverseString('abcd') === 'dcba'
reverseString('hello') === 'olleh'

const reverseString = str => {
  // option 1
  //return str.split('').reverse().join('');

  //option 2
  // let res = '';

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   res = char + res
  // }

  // return res

  //option 3
  return str.split('').reduce((output, char) => {
    output = char + output
    return output
  }, "")

}

//test
console.log(reverseString('abcd'))
=========*************====================

=========*************====================
 task  palindrom
 1. give a string return true or false depending if the string
 2. is a palindrom , Palindrom are words that read the same backwards and forwards. Make Sure is caseSensitive

 --example---
 palindroms("Madam") === true
 palindroms("love") === false

const palindrom = str => {

  str = str.toLowerCase();

  //? option 1
  // const word = str.split('').reverse().join('')

  // if (str === word) {
  //   return true;
  // } else {
  //   return false;
  // }

  //?option 2

  return str === str.split('').reverse().join('')

}
console.log(palindrom('dam'))

=========*************====================

=========*************====================
 task ReverseInt 
 1. turn number to string  ==> 1337 -> '1337'
 2. reverse the string ==>['1','3','3','7'] -> ['7','3','3','1']
 3. turn thes string back into a number ==> "7331" -> 7331

 given an integer return an integer with the digits reversed

 --example--
 reverseInt(13) === 31
 reverseInt(404) === 404
 reverseInt(100) === 1
 reverseInt(-13) === -31
 reverseInt(-100) === -1

const reverseInt = n => {
  let reversed = n.toString().split('').reverse().join('');
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }

  return reversed;
}

console.log(reverseInt(-100));

=========*************====================

=========*************====================
task Max chars

return the character most commanly used in string
input "Hello" -> {H:1, e:1, l:2, o:1}
---example---
maxChar(" I loveeeee noodleeess") === "e"
maxChar("1337") === "3"

const maxChars = str => {
  let charCountObj = {}
  let maxCount = 0;
  let maxChar = "";

  //fill our character count object
  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    charCountObj[char] = charCountObj[char] + 1 || 1

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char]
    }
  }
  return maxChar;
}

console.log(maxChars('I loveeeeee youuu'));

=========*************====================

=========*************====================
Task fizz Buzz

write program that console logs the number
from 1 to n But multiple at there print "fizz " instead of the number
and for the meultiple of five print "buzz" for number three and five print "fizzBuzz"

---example---
fizzBuzz(5);
1
2
fizz
4
buzz
14
fizzBuzz
...
44
fizzBuzz
const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    //? option 1
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log("FizzBuzz")
    // } else if (i % 5 === 0) {
    //   console.log("Buzz");
    // } else if (i % 3 === 0) {
    //   console.log("Fizz");
    // } else {
    //   console.log(i);
    // }

    //?option 2

    let str = "";
    if (i % 3 === 0) {
      str += "Fizz"
    }
    if (i % 5 === 0) {
      str += "Buzz"
    }
    if (str === "") {
      str = i
    }
    console.log(str)
  }
}

fizzBuzz(15)

=========*************====================

=========*************====================


TASK Capitalize alghorithem
write a function that returns the provider string with 
the first letter of each word capitalized ,make sure the
word in lowercase
--example---
capitalize("I am s little tea pot") --> "I Am A Little Tea Pot"
capitalize("sHort AnD sToUt")

const capitalize = str => {
  const arrOfWords = str.split(' ');
  const arrOfWordCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i]

    arrOfWordCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return arrOfWordCased.join(" ");
}

console.log(capitalize("I am A little tea pot"));
console.log(capitalize("sHort AnD sToUt"));

=========*************====================

=========*************====================
Task chunk Algortihme

write a function that splits an array (first argument)
into groups the length of size (second argument)
return them as a two-dimensional arry.

--example--

chunk(["a","b","c","d"],2) --> [["a","b"],["c","d"]]
chunk([0,1,2,3,4,5],4) --> [[0,1,2,3,],[4,5]]

const chunk = (array, size) => {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item])
    } else {
      last.push(item)
    }
  }

  return res;
}
console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 9));
console.log(chunk([0], 9));


=========*************====================

=========*************====================

test anagrams 

check if two strings are anagrams of each other one string is an anagrams of another
if it uses exact same characters in exact same quantity . only consider word charter and make sure the  function
is case insensitive

--example---
anagrams('heart','earth') --> True
anagrams('heart',' earth') --> True
anagrams('Heart','EARTH') --> True
anagrams('lol' , 'lolc') --> False


const anagrams = (stringA, stringB) => {
  //Sanitize Input strings
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length !== stringB.length) {
    return false;
  }

  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];
    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];

    if (!stringACharCount[bChar]) {
      return false;
    } else {
      stringACharCount[bChar]--
    }
  }

  return true;
}

#option 2

const anagrams = (stringA, stringB) => {
  //Sanitize Input strings
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  const stringASorted = stringA.split("").sort().join("");
  const stringBSorted = stringB.split("").sort().join("");

  return stringASorted === stringBSorted
}

console.log(anagrams("Heart", "heart"));
console.log(anagrams('Heart', 'EARTH'));
console.log(anagrams('lol', 'lolc'));

=========**************====================

=========**************====================
Task Steps
wtite a number takes a number n
over multiple lime it should console log a steps shape
with N levels using the # character . be sure to notice
how each step has some number of empty spaces to the right

--example--
steps(2)
'#'
'##'
steps(3)
'#'
'##'
'###'
steps(4)
'#'
'##'
'###'
'####'

const steps = n => {
  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let hash = i; hash > 0; hash--) {
      step += "#";
    }

    for (let space = n - 1; space > 0; space--) {
      step += " ";
    }

    // step += "#".repeat(i);
    // step += " ".repeat(n - i);

    console.log(step)
  }
}

steps(2)
steps(3)
steps(4)

=========*************====================

=========*************====================
Task Pyramid

write a function that accepts a positive number N.
the function should console log a pyramid shape 
with N levels using the # characters. Make sure the 
pyramid has spaces on both the left and right side
--example--
pyramid(1)
    '#'
pyramid(2)
    ' # '
    '###'
pyramid(3)
    '  #  '
    ' ### '
    '#### '

const pyramid = n => {
  for (let i = 1; i <= n; i++) {
    const padding = " ".repeat(n - i);
    const hashes = "#".repeat(i * 2 - 1);

    console.log(padding + hashes + padding);

  }
}

pyramid(1)
pyramid(2)
pyramid(4)

=========*************====================

=========*************====================
task Vowels
Write a function that return the number of vowels found within a string.
vowel characters are 'a','i','u','e' and 'o'
Make sure the functiion is case insensitive!

--example--
vowels("What") --> 1
vowels("Why?") --> 0
vowels("aiUEO") --> 5


const vowels = str => {
  str = str.toLowerCase();
  const vocals = 'aiueo'.split('');
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < vocals.length; j++) {
      const vocal = vocals[j];

      if (char === vocal) {
        count++;
      }
    }
  }

  return count;
}

console.log(vowels("ADA APA DENGAN CINTA"))--> 8;

=========*************====================

=========*************====================


=========*************====================

=========*************====================


=========*************====================

=========*************====================

*/
