function sameCase(a, b){
  console.log([a, b])

  // if a is a letter and b is a letter

  while ((/[a-zA-Z]/).test(a) === true && (/[a-zA-Z]/).test(b) === true) {

    // check to see if letter a is uppercase and if b is uppercase
    if(a === a.toUpperCase() && b === b.toUpperCase()) {
      return 1

    // check to see if letter a is lowercase and if b is lowercase
    } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
      return 1
    }
    return 0
  }

  return -1;
}

// OR
// function sameCase(a, b){
//   console.log([a, b])
//
//   // if a is a letter and b is a letter
//
//   if ((/[a-zA-Z]/).test(a) === true && (/[a-zA-Z]/).test(b) === true) {
//
//     // check to see if letter a is uppercase and if b is uppercase
//     if(a === a.toUpperCase() && b === b.toUpperCase()) {
//       return 1
//
//     // check to see if letter a is lowercase and if b is lowercase
//     } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
//       return 1
//     }
//     return 0
//   }
//
//   return -1;
// }
