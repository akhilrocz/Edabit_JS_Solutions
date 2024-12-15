function tempConversion(tempInCelcius) {
  let res = [];
  let tempInFarenheit = tempInCelcius * (9 / 5) + 32;
  let tempInkelvin = tempInCelcius + 273.15;
  res.push(tempInFarenheit, tempInkelvin);
  return res;
}

console.log(tempConversion(0));
console.log(tempConversion(100));
console.log(tempConversion(-10));
console.log(tempConversion(300.4));
