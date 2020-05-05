function arrayPlusArray(arr1, arr2) {
  var sumArr1 = arr1.reduce((a, b) => a + b, 0)
  console.log(sumArr1)
  var sumArr2 = arr2.reduce((a, b) => a + b, 0)
  console.log(sumArr2)
  return sumArr1 + sumArr2 //something went wrong
}
