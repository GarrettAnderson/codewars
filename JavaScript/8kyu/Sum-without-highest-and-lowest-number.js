// Sum without highest and lowest number

/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/

function sumArray(array) {
  // determine the size of the array
  // if the array contains only 1 element or nothing(it is null)
  if (!Array.isArray(array)) return 0

  // sort array from least to greatest
  array.sort((a, b) => a - b)
  console.log(array)
  // remove the first index value and the last index value
  var newArray = array.slice(1, array.length - 1)
  console.log(newArray)
  // add up remaining values in the array
  var sum = newArray.reduce((a, b) => a + b, 0)
  console.log(sum)
  return sum
}
