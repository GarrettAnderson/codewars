function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }
  const positives = input.filter((number) => Math.sign(number) === 1).reduce((a) => a + 1, 0)
  console.log(positives)
  const negatives = input.filter((number) => Math.sign(number) === -1).reduce((a, b) => a + b, 0)
  console.log(negatives)
  return [ positives, negatives ]
}
