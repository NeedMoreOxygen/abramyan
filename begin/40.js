const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());
const A2 = parseInt(prompt());
const B2 = parseInt(prompt());
const C2 = parseInt(prompt());

const D = A*B2 - A2*B;

const x=(C*B2 - C2*B)/D;
const y=(A*C2 - A2*C)/D;

console.log("x = "+x);
console.log("y = "+y);
