//var 1
function  hasUniqueChars(str){
    const newArr = new Set(str);
    return [...newArr].length === str.length

}
  hasUniqueChars("  n Aa")
  hasUniqueChars(" nAa")

//var 2

function hasUniqueChars(str) {
    return !/(.).*\1/.test(str);
  }

//var 3

let hasUniqueChars = (str) => new Set(str).size === str.length;

// var 4

function hasUniqueChars(str){
    let arr = str.split('').sort();
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] === arr[i+1]) {
          return false;
       }
   }
   return true;
 }