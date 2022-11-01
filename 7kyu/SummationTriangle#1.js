// The task

// You have to make a program capable of returning the sum of all the elements of a triangle with side of size n+1n+1n+1.
// The problem

// Your solution has to support 0≤n≤1060\leq n \leq 10^60≤n≤106. Brute-forcing will not work!
// The definition

// A triangle element aija_{ij}aij​ where iii is the column and jjj is the row can be defined as aij=2j+i+1a_{ij}=2j + i + 1aij​=2j+i+1 where 0≤j≤i≤n0\leq j\leq i\leq n0≤j≤i≤n

function getSum(n) {
    // your code here ..
    return (n + 1n) * (n + 2n) * (4n * n + 3n) / 6n;
}