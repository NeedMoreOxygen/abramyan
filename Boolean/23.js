const A = parseInt(prompt());

const B = Math.floor(A/1000);

let a = (A % 10);

let b = ((A - a) % 100);

let c = (((A - (a+b))/100)%10);

let d = Math.floor(A/1000);

const X = (B<10 && d==a && (b/10)==c);

console.log(X);