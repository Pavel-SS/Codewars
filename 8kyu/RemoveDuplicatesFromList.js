/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

//var1
function distinct(a) {
    let x = [];
    for(let i of a){
      if(!x.includes(i)){
        x.push(i);
      }
    }
    return x;
}

//var2
function distinct(a) {
    return [...new Set(a)];
}

//var3
function distinct(a) {
    return Array.from(new Set(a));
}