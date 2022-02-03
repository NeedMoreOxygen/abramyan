const A = parseInt(prompt()) ;
const B = parseInt(prompt()) ;
const C = parseInt(prompt()) ;
const X = parseInt(B)+parseInt(A)+parseInt(C);

console.log("A = " + (X-(A+C)));
console.log("B = " + (X-(B+A)));
console.log("C = " + (X-(B+C)));

