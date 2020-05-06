/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function(text) {
  // Implement me!
  // seperate the letters in the string
  // count the number of character occurance
  var letterCount = [ ...text ].reduce((res, char) => {
    if (char in res) {
      res[char]++
    } else {
      res[char] = 1
    }
    return res
  }, {})
  console.log(letterCount)

  // count the letters
  var letters = [ ...new Set([ ...text ]) ]
  console.log(letters)
  return letters.map((letter) => [ letter, letterCount[letter] ])
}
