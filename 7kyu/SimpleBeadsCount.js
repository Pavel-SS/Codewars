// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.


//var 1
function countRedBeads(n) {
    let x = n - 1
    if( n === 0 || n === 1){
      return 0
    }else{
      return x * 2
    }
  } 

//var 2

function countRedBeads(n) {
    return n ?  ((n * 2) - 2) : 0
  } 