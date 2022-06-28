function solution(str){

  let arrOfString = str.split('')
  console.log(arrOfString)

  let reverseArr = arrOfString.reverse()
  console.log(reverseArr)

  return reverseArr.join('')
}
