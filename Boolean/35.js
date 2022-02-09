const x = parseInt(prompt());
const y = parseInt(prompt());

const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const C = (x<9 && y<9);
const D = (x1<9 && y1<9);

let a = (x%2);
let b = (x1%2);
let c = (y%2);
let d = (y1%2);

const V = ( C && D && (a===c && b===d)  ||  C && D && (a!=c  &&  b!=d));

console.log(V);