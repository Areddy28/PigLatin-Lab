"use strict"; 

function translate(word) {
    // Convert word to lowercase
    word = word.toLowerCase(); 
    console.log("ANU".toLowerCase()); 
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(word[0])) {
      // If first letter is a vowel
      return word + "way";
    } else {
      // If the first letter isn't a vowel is a consonant
      for (let char of word) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = word.indexOf(char);
          break;
        }
      }
      // Compose final string
      return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
    }
  }

  module.exports = translate; 


  
  
  //Taz's video Code Notes:


// function translate (word) {
//     // if the word starts with a vowel 
//     const vowels = ["a","e","i","o","u"]
//     if (vowels.includes(word[0])) {
//     return word + "way"
// } else {
//     // make a variable to hold the prefix of the word
//     let prefix = ""; 
//     // loop through the word
//     for (let i = 0; i < word.length; i++ ) {

//         if (!vowels.includes(word[i])) {
//             prefix += word[i]; 
//         } 
//         else {
//             return word.slice(i) + prefix + "ay"; 
//         }
//         // convert string to lowercase
//         word = word.toLowerCase()
//         // Initialize vowel index to 0
//     }
// }
 
// }




// module.exports = translate; 


