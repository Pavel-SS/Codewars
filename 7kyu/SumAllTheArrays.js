// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
    let b = arr.join(',').split(",")
    let a=0;
    for(let i=0; i<=b.length; i++){
      isNaN(b[i])?a: a+=+b[i]
    }
    return a
  }