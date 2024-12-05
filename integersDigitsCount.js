function count(num) {
  let absNum = Math.abs(num);
  let newStr = absNum.toString();
  return newStr.length;
}

console.log(count(318));
console.log(count(-92563));
console.log(count(-314890));
