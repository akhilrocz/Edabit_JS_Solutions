function mileMarathon(arr) {
  let sumofNums = 0;
  for (let x = 0; x < arr.length; x++) {
    sumofNums += Math.abs(arr[x]);
  }
  return sumofNums;
}

const res = mileMarathon([-6, 15, 4]);
console.log(res);
