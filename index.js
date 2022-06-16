function isPalindrome(word) {
  // Write your algorithm here
  // convert passed string into an array and reverse it
  const reversedArray = word.split('').reverse()
  const reversedString = reversedArray.join('')
  //check if passed string is equal to the reversed string
  if(reversedString === word) {
    return true
  }else {
    return false
  }
}


/* 
  Add your pseudocode here
  convert passed string into an array
  using reverse method reverse elements in the array
  convert reversed array into a string 
  check if passed string is equal to the reversed string
      return true if condition is true
    else return false
*/

/*
  Add written explanation of your solution here
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
