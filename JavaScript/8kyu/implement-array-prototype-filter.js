Array.prototype.filter = function (callBackFunction) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun

  //PEDAC:
  // 1. Loop over the array of numbers
       // being assesed as less than or greater than 3
  // 2. If the current value is greater than 3, store in a new array
  // 3. If the current value is less than or equal to 3, dont do anything


  for (var i = 0; i <= this.length; i++) {

  var greaterThan = []

    if (callBackFunction(this[i])) {
      greaterThan.push(this[i])
      console.log('true')
    } else {
      console.log('false')
    }
  }
  return greaterThan
}
