function numLayers(num) {
  let intialThickness = 0.5;
  let finalthicknessInMeters = intialThickness * Math.pow(2, num);
  finalthicknessInMeters = finalthicknessInMeters / 1000;
  return `${finalthicknessInMeters.toFixed(3)}m`;
}

console.log(numLayers(1));
console.log(numLayers(4));
console.log(numLayers(21));
