function distinctDigitYear(year) {
  //coding and coding..

  // P: Given an input of a certain year,
    // P: find the next year that is strictly larger than the given one
    // P: AND has ONLY distinct difference

  // E/D: input is [input] integer year
  // E/D: 1000 <= year <=  9000
  // E/D: [output] an integer
  // E/D: The minimum year that is strictly larger than the input number year and all its digits are distinct

  // A: Given an input integer representing a certain year - ex: [2021]
    // A: Split up the input into an iterable array
      // A: For each number (index)  of the array,
        // A: Calculate if that element (number)
  // A: Return the exact next year wherein
      // all the numers are distinct and
      // different from the previous year (No Repeats)

  // A: I want to look at the input,
    // A: starting from that integer/ year, I want to analyse that value
      // A: Do any of the numbers in that value/ year repeat??
          // A: IF numbers repeat, process to the next year
              // increment by 1, i++ etc
          // A: IF NO numbers repeat, return that value


let currentYr = year
let nextYr
let compareYrs = (accumulator, currentValue) => {
  if (accumulator === currentValue) {
    currentYr += 1
    console.log(currentYr)
  } else {
//     console.log('next year')
//     return compareYrs(currentYr)
  }

  }


// console.log(year.toString())

currentYr = year.toString().split("")
console.log(currentYr)

// for (let i = 0; i < currentYr.length; i++) {
//   console.log(currentYr[i])

// //   if (currentYr[i] != 0 && currentYr[i] === currentYr[(i - 1)]) {
// //     console.log(currentYr[i])
// //   }

// }

console.log(currentYr.reduce(compareYrs))

}
