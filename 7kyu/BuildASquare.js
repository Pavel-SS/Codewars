/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

//var 1
function generateShape(integer) {
    let s = [];
    let x = [];

    for (let i = 0; i < integer; i++) {
        s.push('+');
    }

    let y = s.join('');

    for (let i = 0; i < s.length; i++) {
        x.push(y);
    }

    return x.join('\n')
}


//var 2

function generateShape(integer) {
    return Array(integer).fill('+'.repeat(integer)).join('\n')
}