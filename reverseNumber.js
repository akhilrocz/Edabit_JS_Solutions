function rev(n) {
  let num = Math.abs(n);
  let s = num.toString();
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}

console.log(rev(5121));
console.log(rev(69));
console.log(rev(-122157));
