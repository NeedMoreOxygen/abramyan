const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());

const V = (a*a==b*b+c*c) || (b*b==a*a+c*c) || (c*c==b*b+a*a)

console.log(V);
