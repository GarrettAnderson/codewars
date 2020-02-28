function digitize(n) {
  let answer = []
  let place = 1
  while (n / place >= 1) {
    answer.push(Math.floor(n / place) % 10)
    place *= 10
  }
  return answer
}
