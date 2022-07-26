function high(x){
  
    let charAt
    let charValues
    let charValuesArr = []
    let wordValues = []
    
    
  // create the alphabet with values per letter  
    for (let i = 0; i < 26; i++) {
       charAt = String.fromCharCode(97 + i)
  //     console.log(charAt)
       charValues = {
        [charAt]: i + 1
      }
  //     console.log(charValues)
      charValuesArr.push(charValues)
    }
  // print the array of objects representing the letter/ numberic value
    console.log(charValuesArr)
    
    // split the input string into seperate words
    let splitStr = x.split(" ")
    console.log(splitStr)
    
    // loop over the split string and for every word, split that word up
    
    // for each letter of the word, search through the alphabet array for corresponding match
    
    // for each letter, determine the key and value pair
    
    // add the values at each index and store in new array
    
    for (let j = 0; j < splitStr.length; j++) {
      let splitWord = splitStr[j].split("")
      console.log(splitWord)
  
      for (let k = 0; k < splitWord.length; k ++) {
        let letter = splitWord[k]
        console.log(letter)
        
          for (let l = 0; l < charValuesArr.length; l++) {
  //           console.log(charValuesArr[l][letter])
            
            if (charValuesArr[l][letter] != undefined) {
              console.log('value: ' + charValuesArr[l][letter])
              wordValues.push(charValuesArr[l][letter])
              console.log(wordValues)
            }
          }
  
      }
    }
    
    // in the new array of sum values, find the largest value
    
    
  }