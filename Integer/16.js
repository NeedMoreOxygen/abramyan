const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

let c = parseInt((A - (a+b)));

console.log((a*10)+(b/10)+c);

