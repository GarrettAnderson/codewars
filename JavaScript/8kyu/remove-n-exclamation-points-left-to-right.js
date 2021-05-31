function remove(s,n){
  //coding and coding....

  let splitStr = s.split('')

  for (let i = 0; i < n && n > 0; i++) {
//     console.log(n)
    if (splitStr[i] === '!') {
//       console.log('counting')
      let removed = splitStr.splice(i, 1, '')
      n -= 1
      console.log(n)
      }
//     else {
//         i--
//         n--
//       }
  }

  console.log(splitStr.join(''))
  return splitStr.join('')
    
}
