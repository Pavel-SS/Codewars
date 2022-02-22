/*
A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in half and then the cards in the two halves are perfectly interwoven, such that the original bottom card is still on the bottom and the original top card is still on top.

For example, faro shuffling the list

['ace', 'two', 'three', 'four', 'five', 'six']

gives

['ace', 'four', 'two', 'five', 'three', 'six' ]

If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original order.

Write a function that takes an integer n and returns an integer representing the number of faro shuffles it takes to restore a deck of n cards to its original order.

Assume n is an even number between 2 and 2000.

*/
//var1
function faroCount(deckSize){
    let x = 1;
    for (let shuffles = 1; shuffles <= deckSize + 2;  shuffles++){
      if(Math.pow(2,shuffles)%(deckSize-1) === 1){
        return shuffles;
      }
    }
    return x;
  }

//var2
function faroCount(deckSize){
    let term = 1,
        shuffles = 1;
    if (deckSize < 4){
      return 1
    }else{
      for ( shuffles ; term!== (Math.pow(2,shuffles)%(deckSize-1)); shuffles++){}
       return  shuffles
    }
  }