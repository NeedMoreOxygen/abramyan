const x = parseInt(prompt());
const y = parseInt(prompt());

const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const C = (x<9 && y<9);
const D = (x1<9 && y1<9);



const V = ( C && D && (x==x1 || y==y1));

console.log(V);