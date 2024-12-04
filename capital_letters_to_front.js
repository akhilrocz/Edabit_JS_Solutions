let resultString;
let captalLetterString
function capToFront(str) {
  resultString = "";
  captalLetterString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      resultString += str[i];
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      captalLetterString += str[i];
    }
  }
  return captalLetterString + resultString;
}
console.log(capToFront("moveMENT"));
