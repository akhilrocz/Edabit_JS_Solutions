function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" || str[i] == "X") {
      xCount++;
    }
    if (str[i] == "o") {
      oCount++;
    }
  }
  return xCount === oCount;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
