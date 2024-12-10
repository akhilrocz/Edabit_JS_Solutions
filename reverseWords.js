function reverseWords(str) {
  str = str.trim(); //remove leading and trailing spaces
  let stringSplitArr = str.split(/\s+/); //removing extra spaces
  stringSplitArr.reverse();
  return stringSplitArr.join(" ");
}

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));
