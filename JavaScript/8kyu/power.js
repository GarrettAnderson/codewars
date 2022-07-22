function numberToPower(number, power){
    // Code here
    
    let newNum = 1;
    // take in a number 
    
    // determine the number of the power 
  //     console.log(number)
    
    // create a loop that will go throw 'power' number of times
    
    // first time around, multiply the 'number' by itself
    
    // store that new number as a variable
    
    // the loop starts over and multiply the new number by the original number
    
    // then multiply that new number by the original number until loop finishes/ power is 0
    
    for (let i = 0; i < power; i++) {
      newNum *= number
  //     console.log(i)
      console.log(newNum) 
    }
    return newNum
  }