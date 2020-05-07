/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

function past(h, m, s) {
  // determine a variable to store the ms value
  var sum,
    hr,
    min,
    sec = 0
  // determine the amount of hours and add 3600000 to the hour variable
  // if hr is greater than 0 and less than or equal to 23, add 3600000 to the h variable
  for (var i = 0; i <= 23; i++) {
    if (h === i) {
      hr = h * 3600000
      console.log(hr)
    }
  }
  // determine the amount of minutes and add 60000 to the minute variable
  // if min is greater than 0 and less than or equal to 59, add 60000 to the h variable
  for (var j = 0; j <= 59; j++) {
    if (m === j) {
      min = j * 60000
      console.log(min)
    }
  }

  // determine the amount of seconds and add 1000 to the seconds variable
  for (var k = 0; k <= 59; k++) {
    if (s === k) {
      sec = s * 1000
      console.log(sec)
    }
  }

  // add the values of all variable values together
  sum = hr + min + sec
  console.log(sum)
  return sum
}
