function matchLastItem(arr) {
  if (arr.length < 2) return -1;
  const lastEle = arr.pop();
  const concenatedArr = arr.join("");
  return lastEle === concenatedArr;
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
