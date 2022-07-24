function squareSum(numbers){
  
    // go through the array
    
    // for each element at index, square the number
    
    // store that new number in a variable
    
    // store the new number and push into an array
    
    // add the values of the new array
    let sumNum = 0
    let numSqrd
    let numArr = []
    for (let i = 0; i < numbers.length; i++) {
      numSqrd = Math.pow(numbers[i], 2)
      console.log(numSqrd)
      numArr.push(numSqrd)
    }
    console.log(numArr)
    
    for (let j = 0; j < numArr.length; j++) {
      sumNum += numArr[j]
      console.log(sumNum)
    }
    return sumNum
  }