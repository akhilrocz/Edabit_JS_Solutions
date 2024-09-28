function arrayOfMultiples(num,length){
    let res=[];
    for(let i=1;i<=length;i++){
        res.push(num*i); //pushing each value to array 
    }
return res;
}
const output = arrayOfMultiples(7,5);
console.log(output);