function high(x){
  
    let charAt
    let charValues
    let charValuesArr = []
    
  // create the alphabet with numeric values for each letter  
    for (let i = 0; i < 26; i++) {
       charAt = String.fromCharCode(97 + i)
  //     console.log(charAt)
       charValues = {
        [charAt]: i + 1
      }
  //     console.log(charValues)
      charValuesArr.push(charValues)
    }
    console.log(charValuesArr)
    
    
    
    
    
  }