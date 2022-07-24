function findNeedle(haystack) {
    // your code here
    
    // given an array, go through and identify element at index
    
    // if the element is equal to the string 'needle', return the string and its index
    
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        return "found the needle at position " + i
      } 
    }
  }