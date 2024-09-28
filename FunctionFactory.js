
//Currying in js
let a;
let b;
function first(a){
 return function second(b){
return a+b;
 }
}
const res=first(2)(1);
console.log(res);
