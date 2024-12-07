function areaOfCountry(country, area) {
  let totalLandMass = 148940000;
  let percentage = (area / totalLandMass) * 100;
  return `${country} is ${percentage.toFixed(
    2
  )}% of the total world's landmass.`;
}

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));
