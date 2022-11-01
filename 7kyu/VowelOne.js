// vowelOne

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

//var 1
function vowelOne(s){
    let sos = s.toLowerCase().split('')
    let x = sos.map((i) => i === 'a' ||i === 'o' || i === 'e' ||i === 'i' || i === 'u' ? i = 1 : i = 0)
    return x.join('')
  }

//var 2
function vowelOne(s){
    let sos = s.toLowerCase().split('');
    return sos.map(i => 'aoieu'.includes(i) ? 1 : 0).join('') 
  }
