function fun(...arrays){   //rest parameters 
    let res=[]  //Declaration of empty array and adding every array to it
    for(const array of arrays){
        res=res.concat(array)
    }
   return res
}
const result=fun([1,2,3],[5,4],[9,10])
console.log(result)