function Input_arrays(...arrays) {    //takes 1 to n number of arrays
  return arrays.reduce((acc,curr)=>acc.concat(curr),[]);
  
}

console.log(Input_arrays([1, 2],[5,4],[9,10]));
