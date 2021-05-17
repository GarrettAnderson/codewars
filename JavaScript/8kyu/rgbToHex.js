function colorOf(r,g,b){
  //coding here

  let red = r.toString(16)
  let grn = g.toString(16)
  let blue = b.toString(16)
  let colors = [red, grn, blue]

//   console.log(red.toString(16))
//   console.log(grn.toString(16))
//   console.log(blue.toString(16))

//     console.log(colors)

  for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
    if (colors[i] === '0') {
//       console.log(colors[i])
        colors[i] = colors[i] + '0'
    }
    console.log(colors[i])
  }

//     console.log(colors)


}
