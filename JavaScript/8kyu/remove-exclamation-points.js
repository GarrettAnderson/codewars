function removeExclamationMarks(s) {
//   return '';

  // split up the string into an array
  // iterate through the array
    // if the value at the current index is an exclamation point, remove the exclamation point from the array
      // double check the new array
      // join the array into a string
    // if the value at the current index is NOT an exclamation point, do nothing

  let str = s.split('')

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '!') {
      str.splice(i, 1)
      i--
      }
    }
    console.log(str)

}
