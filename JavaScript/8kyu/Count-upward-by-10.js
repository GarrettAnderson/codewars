// Simply take a number input and count upwards 10 times with all of the words separated by ' then '. Be sure not to include then before the first word and after the last word

// for example:
// given input of 60, return 61 then 62 then 63 ... 69 then 70

// Complete the countUp function below.
function countUp(start) {
  // identify the starting number
  var outputString = []
  for (var i = start + 1; i <= start + 10; i++) {
    if (i < start + 10) {
      // otherwise just return i
      outputString.push(i + ' then ')
      // console.log(outputString.join(''))
    } else if (i === start + 10) {
      outputString.push(i)
      // console.log(outputString.join(''))
    }
  }
  console.log(outputString.join(''))
}
