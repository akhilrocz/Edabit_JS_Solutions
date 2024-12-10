function checkEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  //  return JSON.stringify(arr1) === JSON.stringify(arr2);  //convert to json strings and compare , (not suitable for complex objects wirthin arrays)

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

  // return arr1.every((val,index)=>val===arr2[index])  //checks everr corresponding element matches
}
console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));
