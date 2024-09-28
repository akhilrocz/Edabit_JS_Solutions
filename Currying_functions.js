function multiply(arr) {
  return function (n) {
    return arr.map((x) => x * n);
  };
}
console.log(multiply([4, 6, 5])(10));
