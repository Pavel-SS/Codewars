/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

function distinct(a) {
    let x = [];
    for(let i of a){
      if(!x.includes(i)){
        x.push(i);
      }
    }
    return x;
  }