function countPositivesSumNegatives(nums) {
  // A: Declare variable for count of positive numers in nums, let pos = []
  // A: Declare variable for sum of negative numbers in nums, let sumNeg = []
  // A: Loop over nums
      // A: If nums[i] > 0, add to pos array
      // A: IF nums[i] < 0, add to sumNeg array
  // A: Retrun the length of pos array
  // A: Retrun sumNeg.sum()

  let pos = [];
  let posLength = 0;
  let sumNeg = 0;
  let negArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i])
//       posLength = pos.length
//          console.log(pos.length)
//         if (pos.length != null) {
          posLength = pos.length
          console.log(posLength)
//         }

    } else if (nums[i] < 0) {
      negArr.push(nums[i])
//       console.log(negArr)
//       negArr[0] *= -1; // ?? so essentially making the numbers in array positive,
                        // and adding the positive numbers
                        // then finally multiplying the final value for sum by -1
//       return negArr.reduce(function(a,b){ return a + b; });
//       console.log(negArr.reduce(function(a,b){ return a + b; }));
      sumNeg = negArr.reduce(function(a,b){ return a + b; })
      console.log(sumNeg)
    }
//     console.log(posLength)
//     console.log(sumNeg)
  }

  return [posLength, sumNeg]

//     for (let j = 0; j < negArr.length; j++) {
//       console.log(negArr[j])
//       sumNeg += (parseInt(negArr[i]))
//     }

//   sumNeg = negArr.reduce(function(a,b) {
//     console.log(a + b)
//   }, 0)

// console.log(pos.length)
// console.log(sumNeg)

//   return posLength
//   return sumNeg





// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) {
//       return []
//     }

//     const positives = input
//       .filter((number) => Math.sign(number) === 1)
//       .reduce((a) => a + 1, 0)
//       console.log(positives)
//     const negatives = input
//       .filter((number) => Math.sign(number) === -1)
//       .reduce((a, b) => a + b, 0)
//       console.log(negatives)
//     return [positives, negatives]
}
