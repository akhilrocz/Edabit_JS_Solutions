
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea(radius) {
    return Math.PI * this.radius * this.radius;
  }
  getPerimeter(radius) {
    return 2*Math.PI * this.radius;
  }
}
const res1 = new Circle(11);
console.log(res1.getArea());
const res2=new Circle(4.44);
console.log(res2.getPerimeter());

