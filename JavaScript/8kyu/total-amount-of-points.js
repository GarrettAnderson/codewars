function points(games) {
  // your code here
  var totalScore = 0
  // for each index of the array, split the value at the colon
  for (var i = 0; i < games.length; i++) {
    var splitScore = games[i].split(':')
    console.log(splitScore[0])
    // determine if the first value is greater than the second value
    if (splitScore[0] > splitScore[1]) {
      totalScore += 3
      // determine if the first value is less than the second value
    } else if (splitScore[0] < splitScore[1]) {
      totalScore += 0
      // determine if the first value is equal to the second value
    } else {
      totalScore += 1
    }
  }
  return totalScore
}
