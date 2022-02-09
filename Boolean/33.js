const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());

const V = (a<b+c) && (b<a+c) && (c<a+b);

console.log(V);
