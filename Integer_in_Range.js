function intWithinBounds(...values) {
  if (
    Number.isInteger(values[0]) &&
    values[0] >= values[1] &&
    values[0] < values[2]
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
intWithinBounds(4.5, 3, 8);
