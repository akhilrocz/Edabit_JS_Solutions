let sum = 0;
let values = [0.25, 0.1, 0.05, 0.01];
function changeEnough(change, due) {
  for (let i = 0; i < change.length; i++) {
    sum += change[i] * values[i];
  }
  if (sum > due) {
    return true;
  } else {
    return false;
  }
}
console.log(changeEnough([30, 40, 20, 5], 12.55));
