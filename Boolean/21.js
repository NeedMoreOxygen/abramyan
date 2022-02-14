const A = parseInt(prompt());

const a = parseInt(A % 10);

let b = parseInt((A - a) % 100);

const c = parseInt((A - (a+b))/100);

b = b/10;

const V = (c<b && b<a);


console.log(V);