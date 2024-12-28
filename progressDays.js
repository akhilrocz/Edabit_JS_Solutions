function progressDays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] >= 1) {
      count++;
    }
  }
  return count;
}

console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays(progressDays([9, 9])));
