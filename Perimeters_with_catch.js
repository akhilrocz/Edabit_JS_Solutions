function perimeter(l,num){
    return l=="s"?4*num:6.28*num  //using ternary operator to perfoem which operation, and not using if-else statements
}
const res=perimeter("s",7)
const res2=perimeter("c",4)
const res3=perimeter("c",9)
console.log(res)
console.log(res2)
console.log(res3)
