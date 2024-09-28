function fun(b,m){
    return b*Math.pow(m,b-1);  //x^b=>m^b   => b*Math.pow(m,b-1)
}
const res=fun(4,-3)
console.log(res)