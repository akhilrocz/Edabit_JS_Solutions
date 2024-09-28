function fun(obj,name,value){
    obj[name]=value
    return obj
}
const res=fun({},"Akhil",200)    //modifies the object that passsed as an argument
const res2=fun({ piano: 500 }, "Brutus", 400)
const res3=fun({ piano: 500, stereo: 300 }, "Caligula", 440)
console.log(res)
console.log(res2)
console.log(res3)
