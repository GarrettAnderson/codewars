const reverseSeq = n => {
  
    // starting at n, count down until n = 1
      // while n is greater than 0
    let revNums = []
    for (let i = n; i > 0; i--) {
      console.log(i)
      revNums.push(i)
    }
    
    return revNums;
  };