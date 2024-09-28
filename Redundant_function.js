
function redundant(str){
    return function a(){
        return `hello ${str} how are you?`;
    }
}
const result=redundant("John");   //function copied to result
console.log(result)
console.log(result())  //calling result function to execute 