const quarterOf = (month) => {
    // Your code here
    
    // the first quarter, 1, 2, 3, 
      // Jan, Feb, March, return 1
    // the second quarter 4, 5, 6,
      // April, MAy, June return 2
    // the third quarter 7, 8, 9
      // July, August, September return 3
    // the fourth quarter 10, 11, 12
      // Oct, Nov, Dec return 4
  
      if (month >= 1 && month < 4) {
        return 1
      } else if (month >= 4 && month <7) {
        return 2
      } else if (month >= 7 && month < 10) {
        return 3
      } else {
        return 4
      }
  
    
  }