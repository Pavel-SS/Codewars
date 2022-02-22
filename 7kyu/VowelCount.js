
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = str.split('').filter(x=>/a/.exec(x)||/e/.exec(x)||/i/.exec(x)||/o/.exec(x)||/u/.exec(x));
    return vowelsCount.length;
  }