//let str = "Nemo";
let words;
let index;
function findNemo(s) {
  words = s.split(" ");
  index = words.indexOf("Nemo");
  if (index !== -1) {
    console.log("I found Nemo at " + (index + 1) + "!");
  } else {
    console.log("I can't find Nemo :(");
  }
}
findNemo("Nemo is me");
