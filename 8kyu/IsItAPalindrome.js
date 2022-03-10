// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let originalWord = x.toLowerCase(),
        reverseWord = x.toLowerCase().split('').reverse().join('')
    return originalWord === reverseWord
  }