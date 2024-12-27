function validDivision(n) {
  const [numerator, denominator] = n.split("/");
  if (denominator === 0) {
    return "invalid";
  }
  return Number(numerator) % Number(denominator) === 0;
}

console.log(validDivision("6/3"));
console.log(validDivision("30/25"));
console.log(validDivision("0/3"));
