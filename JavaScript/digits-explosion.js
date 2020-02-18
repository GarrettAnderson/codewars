function explode(s) {
  // split string s and set to variable
  let splitString = s.split('')
  console.log(splitString)
  let newString = ''
  let newArray = []
  for (var i = 0; i < splitString.length; i++) {
    //     console.log(splitString[i])
    newString = splitString[i].repeat(splitString[i])
    // add new repeated values to an array
    newArray.push(newString)
    console.log(newArray)
    console.log(newArray.join(''))
  }
  //     newArray.push(newString)
  //     console.log(newArray)
  return newArray.join('')
}
