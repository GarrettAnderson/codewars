function colorOf(r,g,b){
  //coding here

  let red = r.toString(16)
  let grn = g.toString(16)
  let blue = 10.toString(16)
  let colors = [red, grn, blue]

//   console.log(red.toString(16))
//   console.log(grn.toString(16))
//   console.log(blue.toString(16))

//     console.log(colors)

  for (let i = 0; i <= colors.length; i++) {
    if (colors[i] === '0') {
//       console.log(colors[i] + 0)
        colors[i] = colors[i] + '0'
        i--
    }
  }

    console.log(colors)


}
