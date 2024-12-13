function countOnes(decimalNum) {
  if (decimalNum === "0") return "0";
  let cnt = 0;
  let binaryStr = decimalNum.toString(2);
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === "1") {
      cnt++;
    }
  }
  return cnt;
}

console.log(countOnes(0));
console.log(countOnes(100));
console.log(countOnes(999));
