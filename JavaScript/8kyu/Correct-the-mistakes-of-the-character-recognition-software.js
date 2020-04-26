/* 
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
*/

function correct(string) {
  //  identify each character in the string
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i])
    //  at each space, determine if the character is a 0
    if (string[i] === '0') {
      // if the character is 0, replace with an uppercase O
      string = string.replace('0', 'O')
      // print string with the 0 replaced with O
      console.log(string)
      //  at each space, determine if the character is a 1
    } else if (string[i] === '1') {
      // if the character is 1, replace with an uppercase I
      string = string.replace('1', 'I')
      //  at each space, determine if the character is a 5
    } else if (string[i] === '5') {
      // if the character is 5, replace with an uppercase S
      string = string.replace('5', 'S')
    }
    // return the updated string
  }
  return string
}
