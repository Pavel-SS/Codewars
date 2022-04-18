// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//var 1

snail = function(array) {
    var size = array.length;
    
    if (size == 0)
      return [];
  
    if (size == 1)
      return array[0];
    
    var top    = array[0].slice(0, -1);
    var right  = array.slice(0, -1).map(a => a[size - 1]);
    var bottom = array[size -1].slice(1).reverse();
    var left   = array.slice(1).map(a => a[0]).reverse();
    var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
  
    return [].concat(top, right, bottom, left, snail(inner));
  }

  //var2
  snail = function(array) {
    let mCopy = JSON.parse(JSON.stringify(array)),
        ret = [],
        i = 0;
 
   do {
     if (i === 0) {
       ret.push.apply(ret, mCopy.shift());
     } else if (i === 1) {
       ret.push.apply(ret, mCopy.map(item => item.pop()));
     } else if (i === 2) {
       ret.push.apply(ret, mCopy.pop().reverse());
     } else if (i === 3) {
       ret.push.apply(ret, mCopy.map(item => item.shift()).reverse());
     }
     i++;
     i = i % 4;
   } while (mCopy.length > 0 && mCopy[0].length > 0);
 
   return ret;
 }