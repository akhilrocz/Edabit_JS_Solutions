function square_digits(n){
    let s =n.toString();
    let pattern=""
    for(let i=0;i<s.length;i++){
        let x=parseInt(s.charAt(i));  //In java you should use  Character.getNumericValue(s.charAt(i))
        pattern+=x*x
    }
    return pattern
}
console.log(square_digits(2483))