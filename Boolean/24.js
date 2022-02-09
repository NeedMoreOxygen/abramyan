const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

const D = B ** 2 - 4 * A * C;

const x1 = (((-B)+ Math.sqrt(D))/(2*A));
const x2 = (((-B)- Math.sqrt(D))/(2*A));

const V = ((A*(x1**2)+B*x1+C)===0 && (A*(x2**2)+B*x2+C)===0);

console.log(V)