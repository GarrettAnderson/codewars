function remove(s,n){
  //coding and coding....

  let splitStr = s.split("")

  for (let i = 0; i < n; i++) {
//     console.log('counting')
    if (splitStr[i] === '!') {
      let removed = splitStr.splice(i, n, '')
      console.log(splitStr)
//       i--
    }
  }

//       console.log(splitStr)

}
