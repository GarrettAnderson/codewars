Array.prototype.filter = function (array) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun

  //PEDAC:
  // 1. Loop over the array of numbers
       // being assesed as less than or greater than 3
  // 2. If the current value is greater than 3, store in a new array
  // 3. If the current value is less than or equal to 3, dont do anything


  for (var i = 0; i <= array.length; i++) {

  var greaterThan = []
  var lessThanEqual = []

    console.log(array.length)

    if (array[i] > 3 === true) {
//       greaterThan.push(array[i])
       console.log('true')
    } else {
      console.log('false')
//       lessThanEqual.push(array[i])
    }
//     console.log(greaterThan)
  }
}
