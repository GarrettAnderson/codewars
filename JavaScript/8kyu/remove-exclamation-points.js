function removeExclamationMarks(s) {
//   return '';

  // split up the string into an array
  // iterate through the array
    // if the value at the current index is an exclamation point, remove the exclamation point from the array
      // double check the new array
      // join the array into a string
    // if the value at the current index is NOT an exclamation point, do nothing

  let str = s.split('')
//   console.log(str)

  let filtered = str.filter((el, i) => {
    if (el === '!') {
      console.log('testing')
    }
  })

}
