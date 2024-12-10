function jazzify(arr) {
  if (arr.length == 0) return [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("7")) {
      continue;
    }
    arr[i] += "7";
  }
  return arr;
}

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));
