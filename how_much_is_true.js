//returning number of true values in array
const arr=[true, false, false, true, false,true]
let count=0;
function fun()
{

    for(let i=0;i<arr.length;i++){
        if(arr[i]==true){
            count++;
        }
    }
    return count;
}
const result=fun();
console.log(result)
