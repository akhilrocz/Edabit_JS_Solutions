const family = {
  "-3": { m: "great granddaughter", f: "great grandmother" },
  "-2": { m: "grandfather", f: "grandmother" },
  "-1": { m: "father", f: "mother" },
  0: { m: "me!", f: "me!" },
  1: { m: "son", f: "daughter" },
  2: { m: "grandson", f: "granddaughter" },
  3: { m: "great grandson", f: "great granddaughter" },
};
function generation(x, y) {
  if (family[x] && family[x][y]) {    //family[x] will return an object if the generation exists else returns undefined
    return family[x][y];               //family[x][y] access the gender
  }
}

const result = generation(2, "f");
const output = generation(-3, "m");
console.log(output);
console.log(result);
