function removeDups(arr) {
  let newArr = [];
  let seen = new Set();
  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
