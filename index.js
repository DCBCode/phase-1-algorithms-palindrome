function isPalindrome(word) {
  
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

 
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }

  return true;
}

 
/* 
  Add your pseudocode here
*/
//function isPalindrome(word):
// convert the input to lowercase and remove non-alphabetical numerical characters
//sanitizedWord = lowercase(word).replace(/[^a-z0-9]/g, '')

//compare characters at corresponding postions
//for i from 0 to floor(length)(sanitiziedWord)
 //if sanitizedWord[i] is not equal to sanitizedWord[length(sanitizedWord)- i - 1]:
 // return false
  // return true
  //Add written explanation of your solution here
   //This isPalendrom algorithm checks whether a given word is a palindrome. it simply is determining whether the word is the same backward as it is foward. we start of by converting the word to lowercase, then any non-alphanumeric characters are removed. this makes the algorithm case sensitive, and ignores special characters or capitalized letters, the alorithm starts with the the first characters being in the middle of the word then goes out from there if any dont match then it returns false, but if they all match then it returns true. the algorithm is efficient and accurate

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
