function getCount(str) {
  
    let vowels = /[aeiou]/gi
    let arrVowels = str.match(vowels)
  //   console.log(arrVowels.length)
    
    if (arrVowels === null) {    
      return 0;
    } else {
      return arrVowels.length
    }
  }