function distinctDigitYear(year) {
  //separate input year to a string of seperate values
  var yearString = year.toString().split('')
  console.log(yearString)
  // determine the year value
  let y = 0
  for (let i = year; ; i++) {
    if (i.toString().length == [ ...new Set(i.toString().split('')) ].length && i > year) {
      y = i
      break
    }
  }
  return y
}
