function isPalindrome(word) {
  // Write your algorithm here
  var reverseWord = word.split("").reverse().join(""); 

  if(reverseWord === word) {
    return true;
  } else {
    return false;
  }

}

/* 
  Add your pseudocode here
  
  1. split word into array
  2. reverse the array
  3. join the array into a new string
  4. If word == reverseWord {then palindrome}
    -else {not palindrome}

*/

/*
  Add written explanation of your solution here

  1. The function will take a word input and reverse the word 
  2. The reversal process uses a set of methods to split, reverse, and join the word as an array
  2. The function then passes an if statement to check if the strings are equal
  3. The function should return true or false considering the outcome of the if statement

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
