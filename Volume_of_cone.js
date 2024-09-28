function coneVolume(height, radius) {
  let res = (3.14 * height * radius * radius) / 3;
  res = Math.round((res +Number.EPSILON)* 100) / 100;
  return res;
}
console.log(coneVolume(15, 6));
