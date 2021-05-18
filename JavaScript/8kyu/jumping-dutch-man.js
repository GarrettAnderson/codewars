function sc(floor){
//   return ?

    // create a variable to store the string for mr despair
        // take number from input and if greater than 1, respond
        // according to instructions: floor - 1 amount of 'Aa~' ...

  while (floor > 0) {
    let scr = 'Aa~ '
    let scream = scr.repeat(floor - 1)

//     console.log(scream)

  if (floor > 0 && floor > 1 && floor <= 6) {
//     console.log(scream + 'Pa! Aa!')
    return scream + 'Pa! Aa!'
  } else if (floor >= 7) {
//     console.log(scream + 'Pa!')
    return scream + 'Pa!'
  } else if (floor <= 1) {
    console.log(scream)
    return ''
  }
}
  return ''
//   console.log('testing')
}
