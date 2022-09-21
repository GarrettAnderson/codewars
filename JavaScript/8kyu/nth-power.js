function index(array, n){
    //your code here
    
     // PEDAC
    
    // P - find the number at index n and find the n-th power of the element at index n
    
    // E - if n is 2 and array is [1,2,3,4] then result is 3^2 = 9
    
    // D - if n is 2 and array is [1,2,3,4] then result is 3^2 = 9
    
    // A - Algorithm
     
        // iterate of the given array
    
        // if n is greater than the length of the array, return -1
    
        // find the position of n in the array
    
        // given the n position of the number in array, raise that to n-th power
        // math.pow(array[n], n)
    
        for (var i = 0; i < array.length; i++) {
          if (n >= array.length) {
            return -1
          } else {
            return Math.pow(array[n], n)
          }
        }
  }