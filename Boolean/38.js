const x = parseInt(prompt());
const y = parseInt(prompt());

const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const C = (x<9 && y<9);
const D = (x1<9 && y1<9);



const V = ( C && D && ((Math.abs(x-x1)>0 && Math.abs(y-y1)>0) || (Math.abs(x-x1)<=0 && Math.abs(y-y1)<=0)));

console.log(V);