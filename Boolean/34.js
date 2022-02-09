const x = parseInt(prompt());
const y = parseInt(prompt());

const C = (x<9 && y<9);

const V = ((C && x%2>0 && y%2<=0) || (C && x%2<=0 && y%2>0));

console.log(V);