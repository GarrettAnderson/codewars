// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s, n) {
  //coding and coding....
  // separate the input string and place in new variable
  let string = s
  // iterate over the new variable
  for (let i = 0; i < n; i++) {
    // for each value of the string, determine if character is an exclamation point
    string = string.replace('!', '')
    // return the string minus the n number of exclamation points
  }
  return string
}
