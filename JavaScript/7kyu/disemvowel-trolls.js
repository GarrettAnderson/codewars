function disemvowel(str) {
  
  
    // create a regex variable of a string of vowels
    
    let vowels = /[aeiou]/gi
    
    // determine if input string includes either of the
      // letters from the vowels variable
    
    // search the input string
  
    // if that letter at index is a vowel, remove from the array
    let vowelsFound = str.replace(vowels, '')
    console.log(vowelsFound)
    return vowelsFound
    
  }