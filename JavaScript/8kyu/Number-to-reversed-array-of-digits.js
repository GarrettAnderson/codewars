function digitize(n) {
  //code here

  let newArr = []
  let nums = n.toString().split("")
  let rev = nums.reverse()
  let revNumArr = rev.map((el, i) => {
//     console.log(el, i)
    let parsed = parseInt(el)
    console.log(parsed)
  })
//   console.log(newArr)
//   console.log(revNumArr)

}
