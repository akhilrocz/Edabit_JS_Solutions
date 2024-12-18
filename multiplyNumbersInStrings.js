function multiplyNums(str) {
  let strArr = str.split(", ");
  let prod = 1;
  for (let i = 0; i < strArr.length; i++) {
    prod *= parseInt(strArr[i]);
  }
  return prod;
}

console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));
