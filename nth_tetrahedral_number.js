//tetrahedral number is anumber if it can be represented as a pyramid with a traingular base and 3 sides
function tetra(n){   
return n*(n+1)*(n+2)/6;  //formulae for finding nth tetrahedral number
}
const res=tetra(6);
console.log(res);