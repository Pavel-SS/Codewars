// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//var1
function removeChar(str){
    let x = str.split('');
    x.shift();
    x.pop();
   return x.join('');
  
};

//var2
function removeChar(str){
    return str.slice(1,-1)
  };
