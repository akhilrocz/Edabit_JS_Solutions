function shiftToRight(a, b) {
  //   return Math.floor(a / 2 ** b);
  return a >> b;
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
