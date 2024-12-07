//arrays,functions,objects,null and many more are considered as object
function isObject(param) {
  return (
    (typeof param === "object" && param !== null) || typeof param === "function"
  );
}
console.log(
  isObject(function add(x, y) {
    return x + y;
  })
);
console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g")));
console.log(isObject(null));
console.log(isObject(""));
console.log(isObject(new Date())); //object
console.log(isObject(123));
