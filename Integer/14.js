const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

let c = parseInt((A - (a+b))/100);

console.log(((a*100)+(b/10)+c*10));

