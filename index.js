// ---1. Reverse String---

const readline = require("readline");

const reverse_string = (str) => {
  return str.split("").reverse().join("");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string to Reverse:-- ", (input) => {
  const result = reverse_string(input);
//   console.log("Reversed String is :-- ", result);
  rl.close();
});

// ---2. Palindrome Check---

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
const result = isPalindrome("Madam");
// console.log(result);


// ---3. Vowel Count---

const countVowels = () => {
  const str = "programming";
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};
// console.log("Number of Vowels:--", countVowels());

// ---4. Remove Duplicates from Array---
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
};
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
// console.log("Array after removing duplicates:--", removeDuplicates(numbers));

// 5--maxNumber--
const maxNumber = (allNumbers) => {
  let max = allNumbers[0];
  for (let number of allNumbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
const allNumbers = [5444, 1, 9, 3,657];
console.log(maxNumber(allNumbers));
