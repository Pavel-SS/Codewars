// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//var1
function solution(str, ending){
    const str2 = str.split('').reverse()
    let arr = []
     for(let i = 0; i < ending.length; i++){
      arr.push(str2[i])
     }
     return arr.reverse().join('') == ending ? true : false
  }

  //var2
  function solution(str, ending){
    return str.endsWith(ending);
  }