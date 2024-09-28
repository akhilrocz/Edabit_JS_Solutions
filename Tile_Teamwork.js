function possibleBonus(a,b)
{
if(a>=b){ //if already you advanced your friend tile i.e move backwards
    return false;
}


if(a+1>=b||a+2>=b||a+3>=b||a+4>=b||a+5>=b||a+6>=b){
    return true;
} else{
    return false;
}
}
const output1=possibleBonus(3,7)
const output2=possibleBonus(1,9)
const output3=possibleBonus(5,3)
console.log(output1)
console.log(output2)
console.log(output3)