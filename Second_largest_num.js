function secondLargest(arr) {
  let max = arr[0];
  let second_max=-Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second_max = max;
      max = arr[i];
    } else if (arr[i] > second_max) {
      second_max = arr[i];
    }

    if(arr[i]<max&&arr[i]>second_max){
        second_max=arr[i];
      }
  }


  return second_max;
}
const output = secondLargest([10, 40, 30, 20, 50]);
console.log(output);
