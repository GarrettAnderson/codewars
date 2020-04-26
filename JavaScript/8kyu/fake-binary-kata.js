// https://www.codewars.com/kata/fake-binary/train/javascript

// PEDAC
// input of a string
// expected is a string
// '4,3,6,7,5' => '00111'
// '3,7,8,6' => '0111'
// given a string, split up string
// save the split string in a new array
// iterate through the new array
// if the digit at index i is < 5, psuh 0 into new array
// otherwise if the digit at index i >= 5, push 1 into new array
// make sure new array is global
// after all the digits are evaluated, return new string

function fakeBin(x) {
  let splitString = x.split('')
  let newString = []
  console.log(splitString)
  for (let i = 0; i <= splitString.length; i++) {
    //  if the digit at splitString[i] is < 5,
    if (splitString[i] < 5) {
      // push a 0 into the newString array
      newString.push(0)
      console.log(newString)
      // if the digit at splitString[i] is >= 5,
    } else if (splitString[i] >= 5) {
      // push a 1 in the newString array
      newString.push(1)
    }
  }
  // return newString array
  console.log(newString)
  return newString.join('')
}
