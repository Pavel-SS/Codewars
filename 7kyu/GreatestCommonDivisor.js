/*
    Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

 */

//var 1
function mygcd(x,y){
    if (x == 0){
      return y
    } else{
      return mygcd(y%x,x)
    }
  }
  //var2
  function mygcd(x, y){
    for ( let j = Math.max(x, y); j > 0; j-- ){
      if ( x % j === 0 && y % j === 0){
        return j
      }
    }
  }

  //var 3

  const mygcd = (a, b) => b ? mygcd(b, a % b) : a;