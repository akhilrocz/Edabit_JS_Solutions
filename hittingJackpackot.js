function testJackpot(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));
