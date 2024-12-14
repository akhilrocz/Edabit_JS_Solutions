function ascDesNone(arr, str) {
  if (str === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (str === "Des") {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([1, 2, 3, 4], "None"));
