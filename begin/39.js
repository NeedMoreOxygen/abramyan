const A = parseInt(prompt());
const B = parseInt(prompt());
const C = parseInt(prompt());

let D = B ** 2 - 4 * A * C;

let x1 = (((-B)+ Math.sqrt(D))/(2*A));
let x2 = (((-B)- Math.sqrt(D))/(2*A));

console.log("x1 = " + x1);
console.log("x2 = " + x2);