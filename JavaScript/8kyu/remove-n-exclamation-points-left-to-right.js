function remove(s,n){
  //coding and coding....

  let splitStr = s.split('')

  for (let i = 0; i < n; i++) {
    if (splitStr[i] === '!') {
//       console.log('counting')
      let removed = splitStr.splice(i, n)
      n--
//       console.log(removed)

      }
  }

  console.log(splitStr.join(''))
  return splitStr.join('')


}
