function remove(s,n) {
  //coding and coding....

  let splitStr = s.split("")

  for (let i = 0; i < n; i++) {
//     console.log('counting')
    if (splitStr[i] === '!') {
      let removed = splitStr.splice(i, 1)
      i--
    }
      console.log(splitStr)
  }

}
