Array.prototype.filter = function (array) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun

  //PEDAC:
  // 1. Loop over the array of numbers
       // being assesed as less than or greater than 3
  // 2. If the current value is greater than 3, store in a new array
  // 3. If the current value is less than or equal to 3, dont do anything


  var greaterThan = []
  var lessThanEqual = []

  for (var i = 0; i <= array.length; i++) {

    console.log(i)

    if (array[i] > 3 ) {
      greaterThan.push(array[i])
    } else {
      lessThanEqual.push(array[i])
    }
return greaterThan
  }


}
