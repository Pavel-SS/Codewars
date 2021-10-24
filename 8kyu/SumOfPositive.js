/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/


//var1
function positiveSum(arr) {
    let x = [];
    for (let i of arr){
      if(i> 0){
        x.push(i);
      }
    }
    return x.reduce((a,b)=>{return a+b},0);
  }

//var2

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((elem1, elem2)=> elem1+elem2,0)
  }

//var3

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    
      if (arr[i] > 0) {                   
        total += arr[i];                  
      }
    }
    return total;                        
  }