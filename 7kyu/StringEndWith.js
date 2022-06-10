// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending){
    const str2 = str.split('')
    let arr = []
     for(let i = str.length; i <= str.length && i > ending.length; i--){
      arr.unshift(str2[i])
     }
     arr.join('') == ending ? console.log(arr.join('') + " " +ending) : console.log(arr.join('') + " " +ending) 
  }
  solution('gffkffe', 'ffe')
  // solution('abcde', 'abc')
  solution('abcde', 'cde')