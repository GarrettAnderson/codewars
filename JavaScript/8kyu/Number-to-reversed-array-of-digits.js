function digitize(n) {
  //code here

  let newArr = []
  let nums = n.toString().split("")
  let rev = nums.reverse()
  let revNumArr = rev.map((el, i) => {
    console.log(el, i)
    newArr.push(el)
  })
  console.log(newArr)
//   console.log(revNumArr)

}
