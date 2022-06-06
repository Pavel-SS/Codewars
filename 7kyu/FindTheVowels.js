// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

//var 1
function vowelIndices(word){
    const vowels = ['a','e','i','o','u','y']
    const arr = word.toLowerCase().split('')
    let num = []
    for (let i = 0; i < arr.length; i++){
     if(vowels.includes(arr[i])){
       num.push(i+1)
     }
    }
    return num
  }

//var 2
function vowelIndices(word){
    const vowels = ['a','e','i','o','u','y']
    const werb = word.toLowerCase()
    let num = []
    for (let i = 0; i < arr.length; i++){
     if(vowels.includes(werb[i])){
       num.push(i+1)
     }
    }
    return num
  }
//var 3
function vowelIndices(word) {
    var arr = [];
    for(var i = 0; i < word.length; i++) {
      if(/[aeioyu]/i.test(word[i])) {
        arr.push(i+1);
      }
    }
    return arr;
  }