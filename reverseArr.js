function reverseArr(num) {
  return num.toString().split("").map(Number).reverse();
}

console.log(reverseArr(1485979));

console.log(reverseArr(623478));

console.log(reverseArr(12345));
