function reverseAndNot(num) {
  let temp = num;
  let reversed = 0;
  while (temp > 0) {
    let r = temp % 10;
    reversed = reversed * 10 + r;
    temp = Math.floor(temp / 10);
  }
  return reversed.toString() + num.toString();
}

console.log(reverseAndNot(123));
console.log(reverseAndNot(152));
console.log(reverseAndNot(123456789));
