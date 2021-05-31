function remove(s,n){
  //coding and coding....

  let splitStr = s.split('')

  for (let i = 0; i < n; i++) {
    if (splitStr[i] === '!') {
//       console.log('counting')
      let removed = splitStr.splice(i, 1, '')
      n -= 1
//       console.log(removed)
      }
//     else {
//         i--
//         n--
//       }
  }

  console.log(splitStr.join(''))
  return splitStr.join('')


}
