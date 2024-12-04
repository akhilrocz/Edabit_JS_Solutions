function clone(arr) {
  let arr2 = [...arr];  //create a shallow copy
  arr2.push(arr);
  return arr2;
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
