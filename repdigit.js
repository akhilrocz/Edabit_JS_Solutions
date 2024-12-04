let reverse=0;
let r;
let temp;
function isRepdigit(n) {
  temp=n;
    if(temp==0){
        return true;
    }
  while (temp >0) {  
    r = temp % 10;  //6
    reverse = reverse*10+r;   //60  //66
    temp = Math.floor(temp / 10); //6  //0
  }
  if(reverse==n){
    return true;
  } else{
    return false;
  }
 

}
console.log(isRepdigit(-11));
