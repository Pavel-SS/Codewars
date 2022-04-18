// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

//var1
function solve(s){

    let arrS = s.split('');
  
    let upperCaseCount = arrS.filter(a=> /[A-Z]/.test(a)?a:'').length,
        lowerCaseCount = arrS.filter(a=> /[a-z]/.test(a)?a:'').length,
        numberCount = arrS.filter(a=> /\d/.test(a)?a:'').length,
        symbolCount = arrS.filter(a=> /\W/.test(a)?a:'').length;
    return [upperCaseCount,lowerCaseCount,numberCount,symbolCount]
  }

  //var2
  const solve = (s) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(a => s.split(a).length - 1)
  );