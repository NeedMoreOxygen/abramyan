const A = parseInt(prompt()) ;
const B = parseInt(prompt()) ;
const C = parseInt(prompt()) ;
const X = parseInt(B)+parseInt(A)+parseInt(C);

console.log("A = " + (X-(A+B)));
console.log("B = " + (X-(B+C)));
console.log("C = " + (X-(A+C)));

