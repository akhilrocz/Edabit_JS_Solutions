let a;
let b;
function add(n){
    return function x(a){
        return n+a;
    }
}
const res=add(10)(20)
const output=add(0)(20)
const output2=add(-30)(80)
console.log(res)
console.log(output)
console.log(output2)