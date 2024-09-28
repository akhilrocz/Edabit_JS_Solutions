function fn(x){
return Object.entries(x);
//Object.fromEntries will convert back them to object
}
const result=fn({a:1,b:2})
console.log(result)


//you can also convert Object to map using entries in js
const obj={foo:"bar",baz:38}
const map=new Map(Object.entries(obj))
console.log(map)