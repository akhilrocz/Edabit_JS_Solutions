
let mass;
function weight(r,h)
{
  mass= 3.14*(r*r)*h;  
  mass*=0.001;
  mass=Number(mass.toFixed(2));
  console.log(mass)
}
weight(4,10)