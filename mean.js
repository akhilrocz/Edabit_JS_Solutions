function mean(num) {
  let str = num.toString();
  let arr = str.split('');

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(mean(42));

console.log(mean(12345));

console.log(mean(666));
