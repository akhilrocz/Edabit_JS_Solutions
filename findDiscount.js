function dis(price, discount) {
  let discountPercentage = discount / 100;
  return price - price * discountPercentage;
}

console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));
