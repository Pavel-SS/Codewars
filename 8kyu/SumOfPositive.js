/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    let x = [];
    for (let i of arr){
      if(i> 0){
        x.push(i);
      }
    }
    return x.reduce((a,b)=>{return a+b},0);
  }