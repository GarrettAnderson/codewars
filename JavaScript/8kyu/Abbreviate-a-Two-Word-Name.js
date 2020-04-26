/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name) {
  // if the character is a space, split the string at the space
  let fullName = name.split(' ')
  console.log(fullName)
  // create variables for the first and last name
  // identify the new array and store the 0 index in a variable
  let firstName = fullName[0]
  // identify the new array and store the 1 index in a variable
  let lastName = fullName[1]
  console.log(firstName, lastName)
  // loop of the name strings and determine each character
  for (let i = 0; i < fullName.length; i++) {
    let firstInitial = fullName[0][0]
    console.log(firstInitial)
    let lastInitial = fullName[1][0]
    console.log(lastInitial)
    // return the first letter of the array plus a period
    // return the first letter of the array
    return firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase()
  }
}
