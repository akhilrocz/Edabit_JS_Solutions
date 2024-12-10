function totalVolume(...boxes) {
  let totalVolume = 0;
  for (let box of boxes) {
    const volume = box[0] * box[1] * box[2];
    totalVolume += volume;
  }
  return totalVolume;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
